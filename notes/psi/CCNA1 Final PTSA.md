---
tags: [psi]
---
# CCNA1 Final PTSA

`192.168.10.0/24` 
- subnet A - 100
- subnet B - 50

| Spec                              | A                                     | B                                     |
| --------------------------------- | ------------------------------------- | ------------------------------------- |
| Number of bits in the subnet      | 25                                    | 26                                    |
| ip mask                           | `11111111.11111111.11111111.10000000` | `11111111.11111111.11111111.11000000` |
| new ip mask                       | 255.255.255.128                       | 255.255.255.192                       |
| max number of usable subnets      | 32                                      | 16                                      |
| number of usable hosts per subnet | 126                                      |  62                                     |
| ip subnet                         | `192.168.10.0/25`                     | `192.168.10.128/26`                   |
| first                             | `192.168.10.1`                        | `192.168.10.129`                      |
| last                              | `192.168.10.126`                      | `192.168.10.190`                                      |


| description         | a                | b                |
| ------------------- | ---------------- | ---------------- |
| first               | `192.168.10.1`   | `192.168.10.129` |
| last                | `192.168.10.127` | `192.168.10.190` |
| max number of hosts | `124`            | `61`                 |

| device    | ipa              | subnet mask       | gateway        | points |
| --------- | ---------------- | ----------------- | -------------- | ------ |
| PC-A      | `192.168.10.126` | `255.255.255.128` | `192.168.10.1` | 2pts   |
| R1-G0/0/0 | `192.168.10.1`   | `255.255.255.128` | NA             | 2pts   |
| R1-G0/0/1 | `192.168.10.129` | `255.255.255.192` | NA             | 2pts   |
| S1        | `192.168.10.2`   | `255.255.255.128` | `192.168.10.1` | 2pts   |
| PC-B      | `192.168.10.190` | `255.255.255.192` | `192.168.10.129`               | 2pts   |

| assigned to interface | ipv6 subnet            | prefix  |
| --------------------- | ---------------------- | ------- |
| R1-G0/0/0             | `2001:db8:acad:1::/64` | `64`   |
| R1-G0/0/1             | `2001:db8:acad:2::/64` | `64`        |

| Device    | ipv6a                | prefix | gateway              | points |
| --------- | -------------------- | ------ | -------------------- | ------ |
| R1-G0/0/0 | `2001:db8:acad:1::1` | `64`   | NA                   | 3pts   |
| R1-G0/0/1 | `2001:db8:acad:2::1` | `64`   | NA                   | 3pts   |
| S1        | `2001:db8:acad:1::2` | `64`   | `2001:db8:acad:1::1` | 4pts       |

## PC-A
| key           | value              |
| ------------- | ------------------ |
| physical addr | 00E0.F7DA.3542     |
| ipv4 addr     | 192.168.10.126     |
| subnet mask   | 255.255.255.128    |
| ipv4 def gate | 192.168.10.1       |
| ipv6 addr     | 2001:db8:acad:1::3 |
| ipv6 def gate | 2001:db8:acad:1::1                   |

## PC-B
| key           | value           |
| ------------- | --------------- |
| desc          | something       |
| physical addr | 000c.8588.a780  |
| ipv4 addr     | 192.168.10.190  |
| subnet mask   | 255.255.255.192 |
| ipv4 def gate | 192.168.10.129  |
| ipv6 addr     | 2001:db8:acad:2::2                |

## R1
| Desc             | value     |
| ---------------- | --------- |
| router           | 1941           |
| IOS image        | 15.1(4)M4 |
| total RAM        | 262136          |
| total memory     | 255744000          |
| conf register    | 0x2102          |
| cli command used | `show version`          |

### Commands

| Desc                                                                                                                                            | Command                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Display a summary of important information about the ipv4 interfaces                                                                            | `show ip interface`           |
| display the ipv4 routing table                                                                                                                  | `show ip route`               |
| display the layer 2 to layer 3 mapping of addresses                                                                                             | `show mac-address-table`      |
| display detailed ipv4 info on g0/0/0                                                                                                            | `show ip interface gig 0/0/0` |
| display the ipv6 routing table                                                                                                                  | `show ipv6 route`             |
| display a summary of ipv6 interface addresses and status                                                                                        | `show ipv6 interface`         |
| display information about the devices connected to R1. Info should include Device ID, local interface, hold time, capability, platform, port Id | `show cdp neighbors`          |
| Save the current configuration so it will be used the next time the router is started.                                                          | `copy running-config startup-config`                              |
