# Terminology
## Instance
A server instance, running conos.
## Client
Any client of conos, usually an end-user device, directly operated by the user.
5 types of clients are planned (mostly in order of preference of implementation):
- web - easiest transition; doesn't support any local services
- desktop app - supports most local services, but not native apps
- mobile app - better interactivity over web, not much else
- desktop OS - based on linux, supports all local services and native apps (depending on device architecture)
- mobile OS - based on linux, supports limited local services and some native apps; more control over interactivity

## Services
"Backend" implementations.
3 types of services:
- instance services - run on the server
- dynamic services - run on the server when the client doesn't support running the service, but dynamically switches to local service mode
- local service - run on the client, don't work on unsupported clients
