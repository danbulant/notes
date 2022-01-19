'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class ActiveNoteTitlePlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        // Get the window title
        this.baseTitle = document.title;
        // Debounced refreshTitle
        this.debouncedRefreshTitle = obsidian.debounce((file) => {
            this.refreshTitle(file);
        }, 500, false);
        this.handleRename = (file, oldPath) => __awaiter(this, void 0, void 0, function* () {
            // console.log(`file: ${oldPath} renamed to: ${file.path}`);
            if (file instanceof obsidian.TFile && file === this.app.workspace.getActiveFile()) {
                this.app.metadataCache.onCleanCache(() => { this.refreshTitle(file); });
            }
        });
        this.handleDelete = (file) => __awaiter(this, void 0, void 0, function* () {
            this.refreshTitle();
        });
        this.handleOpen = (file) => __awaiter(this, void 0, void 0, function* () {
            if (file instanceof obsidian.TFile && file === this.app.workspace.getActiveFile()) {
                this.debouncedRefreshTitle(file);
            }
        });
        this.handleLeafChange = (leaf) => __awaiter(this, void 0, void 0, function* () {
            this.debouncedRefreshTitle();
        });
        this.handleMetaChange = (file) => __awaiter(this, void 0, void 0, function* () {
            if (file instanceof obsidian.TFile && file === this.app.workspace.getActiveFile()) {
                this.refreshTitle(file);
            }
        });
        this.handleMetaResolve = (file) => __awaiter(this, void 0, void 0, function* () {
            if (file instanceof obsidian.TFile && file === this.app.workspace.getActiveFile()) {
                this.refreshTitle(file);
            }
        });
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            // Show the plugin is loading for developers
            console.log(`loading ${this.manifest.id} plugin`);
            // parse the version from the original title string
            if (this.baseTitle == '' || this.baseTitle == undefined) {
                console.log('baseTitle is unset');
                this.baseTitle = 'Obsidian';
            }
            const m = this.baseTitle.match(/v([0-9.]+)$/);
            this.appVer = m[m.length - 1] || '';
            //console.log(`appVer set to [${this.appVer}]`);
            // Load the settings
            yield this.loadSettings();
            // Add the settings tab
            this.addSettingTab(new ActiveNoteTitlePluginSettingsTab(this.app, this));
            // Set up initial title change
            this.app.workspace.onLayoutReady(this.initialize.bind(this));
            this.refreshTitle();
            //this.app.metadataCache.onCleanCache(this.handleMeta.bind(this));
        });
    }
    initialize() {
        // console.log('registering callbacks');
        // When opening, renaming, or deleting a file, update the window title
        this.registerEvent(this.app.workspace.on('file-open', this.handleOpen));
        this.registerEvent(this.app.workspace.on('active-leaf-change', this.handleLeafChange));
        this.registerEvent(this.app.vault.on('rename', this.handleRename));
        this.registerEvent(this.app.vault.on('delete', this.handleDelete));
        this.registerEvent(this.app.metadataCache.on('changed', this.handleMetaChange));
        //this.registerEvent(this.app.metadataCache.on('resolve', this.handleMetaResolve));
    }
    // Restore original title on unload.
    onunload() {
        console.log(`unloading ${this.manifest.id} plugin`);
        //console.log(`reverting title to '${this.baseTitle}'`);
        document.title = this.baseTitle;
    }
    // The main method that is responsible for updating the title
    refreshTitle(file) {
        let template;
        if (!file) {
            file = this.app.workspace.getActiveFile() || undefined;
        }
        // For the template, the vault and workspace are always available
        template = {
            'vault': this.app.vault.getName(),
            'version': (this.appVer || ''),
            'workspace': this.app.internalPlugins.plugins.workspaces.instance.activeWorkspace // Defaults to: '' if not enabled
        };
        if (file instanceof obsidian.TFile) {
            // If a file is open, the filename, path and frontmatter is added
            let cache = this.app.metadataCache.getFileCache(file);
            if (cache && cache.frontmatter) {
                const isTemplate = new RegExp('<%');
                for (const [frontmatterKey, frontmatterValue] of Object.entries(cache.frontmatter || {})) {
                    let k = ('frontmatter.' + frontmatterKey);
                    if (!isTemplate.test(frontmatterValue)) {
                        template[k] = frontmatterValue;
                    }
                }
            }
            let friendlyBasename = file.basename;
            if (file.extension !== 'md') {
                friendlyBasename = file.name;
            }
            template = Object.assign({ 'parentpath': (file.parent).path, 'filepath': file.path, 'filename': file.name, 'basename': friendlyBasename, 'extension': file.extension }, template);
            //console.log(template)
            document.title = this.templateTitle(template, this.settings.titleTemplate);
        }
        else {
            document.title = this.templateTitle(template, this.settings.titleTemplateEmpty);
        }
    }
    templateTitle(template, title) {
        let delimStr = this.settings.delimStr;
        let titleSeparator = this.settings.titleSeparator;
        if (this.settings.overrideYamlField !== null && this.settings.overrideYamlField.length > 0) {
            let titleOverride = String('frontmatter.' + this.settings.overrideYamlField);
            if (template[titleOverride]) {
                // console.log('override title: %s', template[titleOverride]);
                return template[titleOverride];
            }
        }
        // Process each template key
        Object.keys(template).forEach(field => {
            const hasField = new RegExp(`{{${field}}}`);
            //console.log(`%cchecking if ${title} contains {{${field}}}`, 'background: #222; color: #a0ffff');
            //console.log('bool: ' + hasField.test(title));
            //console.log('type of field: ' + typeof(field));
            //console.log(`val: [${template[field]}]`);
            if (hasField.test(title) && template[field] !== null && String(template[field]).length > 0) {
                //console.log(`%cexecuting transforms: [${field}] --> [${template[field]}]`, 'background: #222; color: #bada55');
                let re = new RegExp(`{{${field}}}`);
                title = title.replace(re, `${template[field]}`);
            }
        });
        // clean up delimiters
        let re = /([(]+)?{{[^}]+}}([)]+)?/g;
        title = title.replace(re, '');
        // clean up delimiters
        const replacements = new Map([
            [`^${delimStr}`, ''],
            [`${delimStr}+`, delimStr],
            [`${delimStr}(?!\ )`, titleSeparator],
            [`(?<!\ )${delimStr}`, ''],
        ]);
        for (const [key, value] of replacements) {
            let re = new RegExp(key, 'g');
            title = title.replace(re, value);
        }
        return title;
    }
    ;
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}
const DEFAULT_SETTINGS = {
    titleTemplate: "{{basename}}~~{{vault}} - Obsidian v{{version}}",
    titleTemplateEmpty: "{{vault}} - Obsidian v{{version}}",
    titleSeparator: " - ",
    delimStr: "~~",
    overrideYamlField: "title"
};
class ActiveNoteTitlePluginSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        let desc;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Window title templates' });
        containerEl.createEl('p', { text: 'These two templates override the window title of the Obsidian window. This is useful for example when you use tracking software that works with window titles. You can use the format `~~{{placeholder}}~~` if you want the placeholder to be completely omitted when blank, otherwise whitespace and other characters will be preserved. You can surround a placeholder with parentheses e.g. `({{frontmatter.project}})` and it will be hidden if the referenced field is empty.' });
        desc = document.createDocumentFragment();
        desc.append('Available ');
        desc.createEl('b').innerText = 'placeholders:';
        let placeholders = [
            ["vault", "workspace", "version"],
            ["filename", "filepath", "parentpath", "basename", "extension"],
            ["frontmatter.<any_frontmatter_key>"]
        ];
        placeholders.forEach(row => {
            desc.createEl("br");
            row.forEach(key => {
                desc.append(`{{${key}}} `);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Default Template')
            .setDesc(desc)
            .addText(text => {
            text.inputEl.style.fontFamily = 'monospace';
            text.inputEl.style.width = '500px';
            text.inputEl.style.height = '46px';
            text
                .setPlaceholder(DEFAULT_SETTINGS.titleTemplate)
                .setValue(this.plugin.settings.titleTemplate)
                .onChange((value) => {
                this.plugin.settings.titleTemplate = value;
                this.plugin.saveData(this.plugin.settings);
                this.plugin.refreshTitle();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('YAML Frontmatter Title Override Field')
            .setDesc('If this frontmatter field is present, use its value as the title instead of dynamically calculating it.')
            .addText(text => {
            text.inputEl.style.fontFamily = 'monospace';
            text.inputEl.style.width = '500px';
            text.inputEl.style.height = '46px';
            text
                .setPlaceholder(DEFAULT_SETTINGS.overrideYamlField)
                .setValue(this.plugin.settings.overrideYamlField)
                .onChange((value) => {
                this.plugin.settings.overrideYamlField = value;
                this.plugin.saveData(this.plugin.settings);
                this.plugin.refreshTitle();
            });
        });
        desc = document.createDocumentFragment();
        desc.append('Available ');
        desc.createEl('b').innerText = 'placeholders:';
        placeholders = [
            ["vault", "workspace", "version"],
        ];
        placeholders.forEach(key => {
            desc.createEl("br");
            desc.append(`{{${key}}}`);
        });
        new obsidian.Setting(containerEl)
            .setName('Template for when no file is open')
            .setDesc(desc)
            .addText(text => {
            text.inputEl.style.fontFamily = 'monospace';
            text.inputEl.style.width = '500px';
            text.inputEl.style.height = '46px';
            text
                .setPlaceholder(DEFAULT_SETTINGS.titleTemplateEmpty)
                .setValue(this.plugin.settings.titleTemplateEmpty)
                .onChange((value) => {
                this.plugin.settings.titleTemplateEmpty = value;
                this.plugin.saveData(this.plugin.settings);
                this.plugin.refreshTitle();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Separator to insert between placeholder elements')
            .setDesc('Replaces delimiter string between placeholders that are not null.')
            .addText(text => {
            text.inputEl.style.fontFamily = 'monospace';
            text.inputEl.style.width = '142px';
            text.inputEl.style.height = '46px';
            text
                .setPlaceholder(' - ')
                .setValue(this.plugin.settings.titleSeparator)
                .onChange((value) => {
                this.plugin.settings.titleSeparator = value;
                this.plugin.saveData(this.plugin.settings);
                this.plugin.refreshTitle();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Delimiter string')
            .setDesc('Select a string to be used to mark locations for separators to be inserted.')
            .addDropdown((dropdown) => {
            dropdown.addOption('~~', '~~ (Tilde)');
            dropdown.addOption('##', '## (Hash)');
            dropdown.addOption('__', '__ (Underscore)');
            dropdown.setValue(this.plugin.settings.delimStr);
            dropdown.onChange((option) => {
                this.plugin.settings.delimStr = option;
                this.plugin.saveData(this.plugin.settings);
                this.plugin.refreshTitle();
            });
        });
    }
}

module.exports = ActiveNoteTitlePlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVEZpbGUsIFRBYnN0cmFjdEZpbGUsIFdvcmtzcGFjZUxlYWYsIG5vcm1hbGl6ZVBhdGgsIGRlYm91bmNlIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5kZWNsYXJlIG1vZHVsZSBcIm9ic2lkaWFuXCIge1xuICBpbnRlcmZhY2UgQXBwIHtcbiAgICBpbnRlcm5hbFBsdWdpbnM6IGFueVxuICB9XG4gIGludGVyZmFjZSBNZXRhZGF0YUNhY2hlIHtcbiAgICBvbkNsZWFuQ2FjaGU6IGFueVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2ZU5vdGVUaXRsZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIC8vIEdldCB0aGUgd2luZG93IHRpdGxlXG4gIGJhc2VUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG4gIGFwcFZlcjogc3RyaW5nO1xuICBzZXR0aW5nczogYW55O1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAvLyBTaG93IHRoZSBwbHVnaW4gaXMgbG9hZGluZyBmb3IgZGV2ZWxvcGVyc1xuICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nICR7dGhpcy5tYW5pZmVzdC5pZH0gcGx1Z2luYCk7XG5cbiAgICAvLyBwYXJzZSB0aGUgdmVyc2lvbiBmcm9tIHRoZSBvcmlnaW5hbCB0aXRsZSBzdHJpbmdcbiAgICBpZiAodGhpcy5iYXNlVGl0bGUgPT0gJycgfHwgdGhpcy5iYXNlVGl0bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnYmFzZVRpdGxlIGlzIHVuc2V0JylcbiAgICAgIHRoaXMuYmFzZVRpdGxlID0gJ09ic2lkaWFuJztcbiAgICB9XG4gICAgY29uc3QgbTogc3RyaW5nW10gPSB0aGlzLmJhc2VUaXRsZS5tYXRjaCgvdihbMC05Ll0rKSQvKTtcbiAgICB0aGlzLmFwcFZlciA9IG1bbS5sZW5ndGgtMV0gfHwgJyc7XG4gICAgLy9jb25zb2xlLmxvZyhgYXBwVmVyIHNldCB0byBbJHt0aGlzLmFwcFZlcn1dYCk7XG5cbiAgICAvLyBMb2FkIHRoZSBzZXR0aW5nc1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBBZGQgdGhlIHNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQWN0aXZlTm90ZVRpdGxlUGx1Z2luU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIFNldCB1cCBpbml0aWFsIHRpdGxlIGNoYW5nZVxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KHRoaXMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJlZnJlc2hUaXRsZSgpO1xuICAgIC8vdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbkNsZWFuQ2FjaGUodGhpcy5oYW5kbGVNZXRhLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcgY2FsbGJhY2tzJyk7XG4gICAgLy8gV2hlbiBvcGVuaW5nLCByZW5hbWluZywgb3IgZGVsZXRpbmcgYSBmaWxlLCB1cGRhdGUgdGhlIHdpbmRvdyB0aXRsZVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2ZpbGUtb3BlbicsIHRoaXMuaGFuZGxlT3BlbikpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2FjdGl2ZS1sZWFmLWNoYW5nZScsIHRoaXMuaGFuZGxlTGVhZkNoYW5nZSkpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbigncmVuYW1lJywgdGhpcy5oYW5kbGVSZW5hbWUpKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIHRoaXMuaGFuZGxlRGVsZXRlKSk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oJ2NoYW5nZWQnLCB0aGlzLmhhbmRsZU1ldGFDaGFuZ2UpKTtcbiAgICAvL3RoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKCdyZXNvbHZlJywgdGhpcy5oYW5kbGVNZXRhUmVzb2x2ZSkpO1xuICB9XG5cbiAgLy8gUmVzdG9yZSBvcmlnaW5hbCB0aXRsZSBvbiB1bmxvYWQuXG4gIG9udW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKGB1bmxvYWRpbmcgJHt0aGlzLm1hbmlmZXN0LmlkfSBwbHVnaW5gKTtcbiAgICAvL2NvbnNvbGUubG9nKGByZXZlcnRpbmcgdGl0bGUgdG8gJyR7dGhpcy5iYXNlVGl0bGV9J2ApO1xuICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy5iYXNlVGl0bGU7XG4gIH1cblxuICAvLyBEZWJvdW5jZWQgcmVmcmVzaFRpdGxlXG4gIGRlYm91bmNlZFJlZnJlc2hUaXRsZSA9IGRlYm91bmNlKChmaWxlPzogVEZpbGUpID0+IHtcbiAgICB0aGlzLnJlZnJlc2hUaXRsZShmaWxlKTtcbiAgfSwgNTAwLCBmYWxzZSk7XG5cbiAgLy8gVGhlIG1haW4gbWV0aG9kIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSB0aXRsZVxuICByZWZyZXNoVGl0bGUoZmlsZT86IFRGaWxlKTogdm9pZCB7XG4gICAgbGV0IHRlbXBsYXRlOiBhbnk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEZvciB0aGUgdGVtcGxhdGUsIHRoZSB2YXVsdCBhbmQgd29ya3NwYWNlIGFyZSBhbHdheXMgYXZhaWxhYmxlXG4gICAgdGVtcGxhdGUgPSB7XG4gICAgICAndmF1bHQnOiB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAndmVyc2lvbic6ICh0aGlzLmFwcFZlciB8fCAnJyksXG4gICAgICAnd29ya3NwYWNlJzogdGhpcy5hcHAuaW50ZXJuYWxQbHVnaW5zLnBsdWdpbnMud29ya3NwYWNlcy5pbnN0YW5jZS5hY3RpdmVXb3Jrc3BhY2UgLy8gRGVmYXVsdHMgdG86ICcnIGlmIG5vdCBlbmFibGVkXG4gICAgfTtcbiAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAvLyBJZiBhIGZpbGUgaXMgb3BlbiwgdGhlIGZpbGVuYW1lLCBwYXRoIGFuZCBmcm9udG1hdHRlciBpcyBhZGRlZFxuICAgICAgbGV0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoY2FjaGUgJiYgY2FjaGUuZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgY29uc3QgaXNUZW1wbGF0ZSA9IG5ldyBSZWdFeHAoJzwlJyk7XG4gICAgICAgIGZvciAoY29uc3QgW2Zyb250bWF0dGVyS2V5LCBmcm9udG1hdHRlclZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjYWNoZS5mcm9udG1hdHRlciB8fCB7fSkpIHtcbiAgICAgICAgICBsZXQgayA9ICgnZnJvbnRtYXR0ZXIuJyArIGZyb250bWF0dGVyS2V5KSBhcyBzdHJpbmc7XG4gICAgICAgICAgaWYgKCFpc1RlbXBsYXRlLnRlc3QoZnJvbnRtYXR0ZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tdID0gZnJvbnRtYXR0ZXJWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmcmllbmRseUJhc2VuYW1lOiBzdHJpbmcgPSBmaWxlLmJhc2VuYW1lO1xuICAgICAgaWYgKGZpbGUuZXh0ZW5zaW9uICE9PSAnbWQnKSB7XG4gICAgICAgIGZyaWVuZGx5QmFzZW5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgJ3BhcmVudHBhdGgnOiAoZmlsZS5wYXJlbnQpLnBhdGgsXG4gICAgICAgICdmaWxlcGF0aCc6IGZpbGUucGF0aCxcbiAgICAgICAgJ2ZpbGVuYW1lJzogZmlsZS5uYW1lLFxuICAgICAgICAnYmFzZW5hbWUnOiBmcmllbmRseUJhc2VuYW1lLFxuICAgICAgICAnZXh0ZW5zaW9uJzogZmlsZS5leHRlbnNpb24sXG4gICAgICAgIC4uLnRlbXBsYXRlXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKHRlbXBsYXRlKVxuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aGlzLnRlbXBsYXRlVGl0bGUodGVtcGxhdGUsIHRoaXMuc2V0dGluZ3MudGl0bGVUZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy50ZW1wbGF0ZVRpdGxlKHRlbXBsYXRlLCB0aGlzLnNldHRpbmdzLnRpdGxlVGVtcGxhdGVFbXB0eSk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVUaXRsZSh0ZW1wbGF0ZTogYW55LCB0aXRsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgZGVsaW1TdHIgPSB0aGlzLnNldHRpbmdzLmRlbGltU3RyO1xuICAgIGxldCB0aXRsZVNlcGFyYXRvciA9IHRoaXMuc2V0dGluZ3MudGl0bGVTZXBhcmF0b3I7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mub3ZlcnJpZGVZYW1sRmllbGQgIT09IG51bGwgJiYgdGhpcy5zZXR0aW5ncy5vdmVycmlkZVlhbWxGaWVsZC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdGl0bGVPdmVycmlkZSA9IFN0cmluZygnZnJvbnRtYXR0ZXIuJyArIHRoaXMuc2V0dGluZ3Mub3ZlcnJpZGVZYW1sRmllbGQpO1xuICAgICAgaWYgKHRlbXBsYXRlW3RpdGxlT3ZlcnJpZGVdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvdmVycmlkZSB0aXRsZTogJXMnLCB0ZW1wbGF0ZVt0aXRsZU92ZXJyaWRlXSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZVt0aXRsZU92ZXJyaWRlXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvY2VzcyBlYWNoIHRlbXBsYXRlIGtleVxuICAgIE9iamVjdC5rZXlzKHRlbXBsYXRlKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGNvbnN0IGhhc0ZpZWxkID0gbmV3IFJlZ0V4cChge3ske2ZpZWxkfX19YCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGAlY2NoZWNraW5nIGlmICR7dGl0bGV9IGNvbnRhaW5zIHt7JHtmaWVsZH19fWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2EwZmZmZicpO1xuICAgICAgLy9jb25zb2xlLmxvZygnYm9vbDogJyArIGhhc0ZpZWxkLnRlc3QodGl0bGUpKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ3R5cGUgb2YgZmllbGQ6ICcgKyB0eXBlb2YoZmllbGQpKTtcbiAgICAgIC8vY29uc29sZS5sb2coYHZhbDogWyR7dGVtcGxhdGVbZmllbGRdfV1gKTtcbiAgICAgIGlmIChoYXNGaWVsZC50ZXN0KHRpdGxlKSAmJiB0ZW1wbGF0ZVtmaWVsZF0gIT09IG51bGwgJiYgU3RyaW5nKHRlbXBsYXRlW2ZpZWxkXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGAlY2V4ZWN1dGluZyB0cmFuc2Zvcm1zOiBbJHtmaWVsZH1dIC0tPiBbJHt0ZW1wbGF0ZVtmaWVsZF19XWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGB7eyR7ZmllbGR9fX1gKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZS5yZXBsYWNlKHJlLCBgJHt0ZW1wbGF0ZVtmaWVsZF19YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2xlYW4gdXAgZGVsaW1pdGVyc1xuICAgIGxldCByZSA9IC8oWyhdKyk/e3tbXn1dK319KFspXSspPy9nO1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZShyZSwgJycpO1xuICAgIC8vIGNsZWFuIHVwIGRlbGltaXRlcnNcbiAgICBjb25zdCByZXBsYWNlbWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFtgXiR7ZGVsaW1TdHJ9YCwgJyddLFxuICAgICAgW2Ake2RlbGltU3RyfStgLCBkZWxpbVN0cl0sXG4gICAgICBbYCR7ZGVsaW1TdHJ9KD8hXFwgKWAsIHRpdGxlU2VwYXJhdG9yXSxcbiAgICAgIFtgKD88IVxcICkke2RlbGltU3RyfWAsICcnXSxcbiAgICBdKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiByZXBsYWNlbWVudHMpIHtcbiAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoa2V5LCAnZycpO1xuICAgICAgdGl0bGUgPSB0aXRsZS5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZVJlbmFtZSA9IGFzeW5jIChmaWxlOiBURmlsZSwgb2xkUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYGZpbGU6ICR7b2xkUGF0aH0gcmVuYW1lZCB0bzogJHtmaWxlLnBhdGh9YCk7XG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlID09PSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpKSB7XG4gICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uQ2xlYW5DYWNoZSgoKSA9PiB7IHRoaXMucmVmcmVzaFRpdGxlKGZpbGUpOyB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVEZWxldGUgPSBhc3luYyAoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLnJlZnJlc2hUaXRsZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlT3BlbiA9IGFzeW5jIChmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZSA9PT0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRSZWZyZXNoVGl0bGUoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlTGVhZkNoYW5nZSA9IGFzeW5jIChsZWFmOiBXb3Jrc3BhY2VMZWFmIHwgbnVsbCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRoaXMuZGVib3VuY2VkUmVmcmVzaFRpdGxlKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVNZXRhQ2hhbmdlID0gYXN5bmMgKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlID09PSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpKSB7XG4gICAgICB0aGlzLnJlZnJlc2hUaXRsZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVNZXRhUmVzb2x2ZSA9IGFzeW5jIChmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZSA9PT0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKSkge1xuICAgICAgdGhpcy5yZWZyZXNoVGl0bGUoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbn1cblxuaW50ZXJmYWNlIEFjdGl2ZU5vdGVUaXRsZVBsdWdpblNldHRpbmdzIHtcbiAgdGl0bGVUZW1wbGF0ZTogc3RyaW5nLFxuICB0aXRsZVRlbXBsYXRlRW1wdHk6IHN0cmluZyxcbiAgdGl0bGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgZGVsaW1TdHI6IHN0cmluZyxcbiAgb3ZlcnJpZGVZYW1sRmllbGQ6IHN0cmluZ1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBBY3RpdmVOb3RlVGl0bGVQbHVnaW5TZXR0aW5ncyA9IHtcbiAgdGl0bGVUZW1wbGF0ZTogXCJ7e2Jhc2VuYW1lfX1+fnt7dmF1bHR9fSAtIE9ic2lkaWFuIHZ7e3ZlcnNpb259fVwiLFxuICB0aXRsZVRlbXBsYXRlRW1wdHk6IFwie3t2YXVsdH19IC0gT2JzaWRpYW4gdnt7dmVyc2lvbn19XCIsXG4gIHRpdGxlU2VwYXJhdG9yOiBcIiAtIFwiLFxuICBkZWxpbVN0cjogXCJ+flwiLFxuICBvdmVycmlkZVlhbWxGaWVsZDogXCJ0aXRsZVwiXG59XG5cbmNsYXNzIEFjdGl2ZU5vdGVUaXRsZVBsdWdpblNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cbiAgcGx1Z2luOiBBY3RpdmVOb3RlVGl0bGVQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQWN0aXZlTm90ZVRpdGxlUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBsZXQgZGVzYzogRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHt0ZXh0OiAnV2luZG93IHRpdGxlIHRlbXBsYXRlcyd9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHt0ZXh0OiAnVGhlc2UgdHdvIHRlbXBsYXRlcyBvdmVycmlkZSB0aGUgd2luZG93IHRpdGxlIG9mIHRoZSBPYnNpZGlhbiB3aW5kb3cuIFRoaXMgaXMgdXNlZnVsIGZvciBleGFtcGxlIHdoZW4geW91IHVzZSB0cmFja2luZyBzb2Z0d2FyZSB0aGF0IHdvcmtzIHdpdGggd2luZG93IHRpdGxlcy4gWW91IGNhbiB1c2UgdGhlIGZvcm1hdCBgfn57e3BsYWNlaG9sZGVyfX1+fmAgaWYgeW91IHdhbnQgdGhlIHBsYWNlaG9sZGVyIHRvIGJlIGNvbXBsZXRlbHkgb21pdHRlZCB3aGVuIGJsYW5rLCBvdGhlcndpc2Ugd2hpdGVzcGFjZSBhbmQgb3RoZXIgY2hhcmFjdGVycyB3aWxsIGJlIHByZXNlcnZlZC4gWW91IGNhbiBzdXJyb3VuZCBhIHBsYWNlaG9sZGVyIHdpdGggcGFyZW50aGVzZXMgZS5nLiBgKHt7ZnJvbnRtYXR0ZXIucHJvamVjdH19KWAgYW5kIGl0IHdpbGwgYmUgaGlkZGVuIGlmIHRoZSByZWZlcmVuY2VkIGZpZWxkIGlzIGVtcHR5Lid9KTtcblxuICAgIGRlc2MgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGVzYy5hcHBlbmQoJ0F2YWlsYWJsZSAnKTtcbiAgICBkZXNjLmNyZWF0ZUVsKCdiJykuaW5uZXJUZXh0ID0gJ3BsYWNlaG9sZGVyczonO1xuICAgIGxldCBwbGFjZWhvbGRlcnMgPSBbXG4gICAgICBbIFwidmF1bHRcIiwgXCJ3b3Jrc3BhY2VcIiwgXCJ2ZXJzaW9uXCIgXSxcbiAgICAgIFsgXCJmaWxlbmFtZVwiLCBcImZpbGVwYXRoXCIsIFwicGFyZW50cGF0aFwiLCBcImJhc2VuYW1lXCIsIFwiZXh0ZW5zaW9uXCIgXSxcbiAgICAgIFsgXCJmcm9udG1hdHRlci48YW55X2Zyb250bWF0dGVyX2tleT5cIiBdXG4gICAgXVxuICAgIHBsYWNlaG9sZGVycy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBkZXNjLmNyZWF0ZUVsKFwiYnJcIilcbiAgICAgIHJvdy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGRlc2MuYXBwZW5kKGB7eyR7a2V5fX19IGApXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRGVmYXVsdCBUZW1wbGF0ZScpXG4gICAgICAuc2V0RGVzYyhkZXNjKVxuICAgICAgLmFkZFRleHQodGV4dCA9PiB7XG4gICAgICAgIHRleHQuaW5wdXRFbC5zdHlsZS5mb250RmFtaWx5ID0gJ21vbm9zcGFjZSc7XG4gICAgICAgIHRleHQuaW5wdXRFbC5zdHlsZS53aWR0aCA9ICc1MDBweCc7XG4gICAgICAgIHRleHQuaW5wdXRFbC5zdHlsZS5oZWlnaHQgPSAnNDZweCc7XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoREVGQVVMVF9TRVRUSU5HUy50aXRsZVRlbXBsYXRlKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZVRlbXBsYXRlKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlVGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hUaXRsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdZQU1MIEZyb250bWF0dGVyIFRpdGxlIE92ZXJyaWRlIEZpZWxkJylcbiAgICAgIC5zZXREZXNjKCdJZiB0aGlzIGZyb250bWF0dGVyIGZpZWxkIGlzIHByZXNlbnQsIHVzZSBpdHMgdmFsdWUgYXMgdGhlIHRpdGxlIGluc3RlYWQgb2YgZHluYW1pY2FsbHkgY2FsY3VsYXRpbmcgaXQuJylcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuaGVpZ2h0ID0gJzQ2cHgnO1xuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKERFRkFVTFRfU0VUVElOR1Mub3ZlcnJpZGVZYW1sRmllbGQpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm92ZXJyaWRlWWFtbEZpZWxkKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm92ZXJyaWRlWWFtbEZpZWxkID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoVGl0bGUoKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2MgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGVzYy5hcHBlbmQoJ0F2YWlsYWJsZSAnKTtcbiAgICBkZXNjLmNyZWF0ZUVsKCdiJykuaW5uZXJUZXh0ID0gJ3BsYWNlaG9sZGVyczonO1xuICAgIHBsYWNlaG9sZGVycyA9IFtcbiAgICAgIFsgXCJ2YXVsdFwiLCBcIndvcmtzcGFjZVwiLCBcInZlcnNpb25cIiBdLFxuICAgIF1cbiAgICBwbGFjZWhvbGRlcnMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZGVzYy5jcmVhdGVFbChcImJyXCIpXG4gICAgICBkZXNjLmFwcGVuZChge3ske2tleX19fWApXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdUZW1wbGF0ZSBmb3Igd2hlbiBubyBmaWxlIGlzIG9wZW4nKVxuICAgICAgLnNldERlc2MoZGVzYylcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuaGVpZ2h0ID0gJzQ2cHgnO1xuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKERFRkFVTFRfU0VUVElOR1MudGl0bGVUZW1wbGF0ZUVtcHR5KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZVRlbXBsYXRlRW1wdHkpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVUZW1wbGF0ZUVtcHR5ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoVGl0bGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTZXBhcmF0b3IgdG8gaW5zZXJ0IGJldHdlZW4gcGxhY2Vob2xkZXIgZWxlbWVudHMnKVxuICAgICAgLnNldERlc2MoJ1JlcGxhY2VzIGRlbGltaXRlciBzdHJpbmcgYmV0d2VlbiBwbGFjZWhvbGRlcnMgdGhhdCBhcmUgbm90IG51bGwuJylcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUud2lkdGggPSAnMTQycHgnO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUuaGVpZ2h0ID0gJzQ2cHgnO1xuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCcgLSAnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZVNlcGFyYXRvcilcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZVNlcGFyYXRvciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaFRpdGxlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRGVsaW1pdGVyIHN0cmluZycpXG4gICAgICAuc2V0RGVzYygnU2VsZWN0IGEgc3RyaW5nIHRvIGJlIHVzZWQgdG8gbWFyayBsb2NhdGlvbnMgZm9yIHNlcGFyYXRvcnMgdG8gYmUgaW5zZXJ0ZWQuJylcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKCd+ficsICd+fiAoVGlsZGUpJyk7XG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbignIyMnLCAnIyMgKEhhc2gpJyk7XG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbignX18nLCAnX18gKFVuZGVyc2NvcmUpJyk7XG4gICAgICAgIGRyb3Bkb3duLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRlbGltU3RyKTtcbiAgICAgICAgZHJvcGRvd24ub25DaGFuZ2UoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRlbGltU3RyID0gb3B0aW9uO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoVGl0bGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICB9XG59XG4iXSwibmFtZXMiOlsiUGx1Z2luIiwiZGVib3VuY2UiLCJURmlsZSIsIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FB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
