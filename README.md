# Pro (Production Ready) Gauzy™ Platform
![image](https://user-images.githubusercontent.com/6468571/181062229-eb906943-211d-4506-af38-bc945bec4673.png)

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ever-co/ever-gauzy)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/gauzy)
[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/ever-co/ever-gauzy?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/evereq?utm_source=github&utm_medium=button&utm_term=evereq&utm_campaign=github)

Ever® Gauzy™ Pro is an open-source program designed for sharing and on-demand service economies. Its name was created by combining the "Ever" and "Gazy" Ever® trademarks.

- A word associated with enterprise resource planning software (ERP)
- CRM refers to software that manages a company's interactions with its customers.
- Human Resource Management (HRM) software with "Time and Activity Tracking" functionality for employees.

![overview](https://docs.gauzy.co/docs/assets/overview.png)

For further information about the platform, please visit the website of our firm. - **<https://gauzy.co>**. 

The Ever® Gauzy™ Platform is one of the numerous subsystems that comprise our Open Platform for On-Demand and Sharing Economies system, which also consists of many other subsystems. Simply perusing our website will provide you with further details regarding the services we provide. **<https://ever.co>**.

Ever® Gauzy™ Platform main features:

- Human Resource Management (HRM) in conjunction with Time Management and - Tracking, as well as Employee Performance Monitoring
- Management of Relationships with Customers (CRM) (CRM)
- ERP stands for "Enterprise Resource Planning" (ERP)
- Projects / Tasks Management
- Sales Management
- Management of Financial Resources and Costs (including Accounting, Billing, and Other Related Tasks)
- Management of Inventory, Management of the Supply Chain, and Management of Production

More detailed list of the features available in the platform: 

- A Dashboard (which gives an overview of many indicators, such as the revenue and costs of the organization, employee bonuses, and so on)
- Time Management, Tracking Time, Tracking Activities, and Timesheets
- Employees Management (including a registration of corporate employees and contractors, pay rates, etc.)
- Interviews with Candidates and New Employees Onboarding
- Contacts Management (Clients / Customers / Leads / etc.)
- Itineraries, Engagements, and Other Events
- Project Management / Tasks
- Goals, Key Performance Indicators, Objectives, and Key Results
- Sales Pipelines - Proposals
- Financial Statements, Billing, and Cost Estimates
- Financial Transactions - Billing
- Income / Expenses Management
- Policies for the Administration of Leave, Holidays, and Approvals
- A Record of Inventory
- Equipment / Sharing
- The Organization's Various Teams and Departments
- Customers and Business Partners of the Organization
- Support Center and Information Database
- Multiple Organizations Management - Tags / Labels - Reports
- Public Pages for the Organization and Individual Employees
- Cohesions and Integrations (Upwork, HubStaff, etc.)
- Access to Email Templates and Email Archive
- Data Import / Export
- Roles / Permissions
- Multi-currency
- Multi-language
- Negative/Positive; Business/Material; Light/Dark; and Other Themes

Read more [About Gauzy](https://github.com/ever-co/ever-gauzy/wiki/About-Gauzy) and [How to use it](https://github.com/ever-co/ever-gauzy/wiki/How-to-use-Gauzy) at your company, on-demand business, freelance business, agency, studio or in-house teams.

## Downloads, Testing and Production
![image](https://user-images.githubusercontent.com/6468571/181062417-19abc926-554d-4f0f-8eb0-42e795d88fdf.png)

### Download

On the homepage of the official Gauzy website, you may find links to download the Desktop Apps, the Gauzy Platform, and the Gauzy Server (Windows, Mac, and Linux) [Downloads](https://web.gauzy.co/downloads) page.

In addition, all downloads are also available from the following pages:
- [Gauzy Releases](https://github.com/ever-co/ever-gauzy/releases)
- [Server Releases](https://github.com/ever-co/ever-gauzy-server/releases)
- [Desktop App Releases](https://github.com/ever-co/ever-gauzy-desktop/releases)
- [Desktop Timer App Releases](https://github.com/ever-co/ever-gauzy-desktop-timer/releases)

### Production (SaaS, WIP)

-  SaaS hosted version of the Ever® GauzyTM Platform may be found at https://app.gauzy.co. (not yet used in production; still being tested, but otherwise identical to <https://demo.gauzy.co> for now)

### Dev Builds

-   Gauzy Platform Dev builds (using CI/CD, from the `develop` branch) will be available later at <https://app.gauzy.dev>

### Server & Desktop Apps

We have Gauzy Server and two Desktop Apps (for Windows/Mac/Linux): 

-   Ever® Gauzy Server is comprised of the Gauzy API, an embedded SQLite database (or the capability to connect to an external PostgreSQL database), and the capability to deliver the Guazy frontend. It facilitates the quick operation of Gauzy Server for several clients (browser based or Desktop based). This is the recommended solution for implementing the Ever Gauzy Platform in small to medium-sized businesses.

-   Desktop application for Ever® Gauzy that incorporates the Gauzy user interface (UI), Gauzy application programming interface (API), and SQLite database, among other features. It permits rapid local execution of the whole Gauzy solution, including the UI and the Timer (for time tracking, optionally of course). In addition, it allows you to connect to an external database (such as PostgreSQL) and API (if you have Gauzy Server with API/DB installed on a separate machine, or if you desire to access to our live API). If you desire to test out Gauzy fast or for personal use, or if you prefer to connect to Gauzy Server in a "client-server" arrangement, it is advised that you do so (and use Desktop App instead of web browser).
 
-   The Ever® Gauzy Desktop Timer App offers time and activity tracking for employees (agents), inclusive of screenshots and activity monitoring. It is suggested that employees set up their own time tracking system if they do not want access to other Gauzy Platform services (such as accounting) and just need to monitor work hours.

More information about our Server & Desktop Apps:

- To download for your operating system, visit the official [Downloads] website at https://web.gauzy.co/downloads; alternatively, check the section under "Download" above for further links to the release sites of our software.
- Using the Setup Wizard, configure Gauzy Server using the default options, and then start it.
- You may also set up the Gauzy Desktop App, which can operate on its own or connect to the Gauzy Server. Alternatively, you can set up the Gauzy Desktop Timer App (should be connected to Gauzy Server)
- If you installed Gauzy Server or the Gauzy Desktop App, you can try out the Admin capability by logging in using the credentials "admin@ever.co" and "admin" for the password. Take note that this particular Admin user is not an employee, and as a result, you will not be able to monitor their time.
- You may log in to Gauzy UI using the email address "employee@ever.co" and the password "123456" to examine Employee-related features or to run Desktop Timer from the "Employee" viewpoint, respectively (such user is an Employee and can track time).
- If you install Gauzy Server, you will be able to access to it by using a browser (by default on http://localhost:8084) or by using Gauzy Desktop Applications (be sure to set Desktop apps to connect to Gauzy API on http://127.0.0.1:5620/api since this is where Gauzy Server API runs by default).
- You can read more information about our Desktop Apps in the [Desktop Apps Wiki Page](https://github.com/ever-co/ever-gauzy/wiki/Gauzy-Desktop-Apps) and about our Server in the [Server Wiki Page](https://github.com/ever-co/ever-gauzy/wiki/Gauzy-Server). - The Desktop Apps Wiki Page can be found at https://git

## Technology Stack and Requirements
![image](https://user-images.githubusercontent.com/6468571/181062756-e2a4f5cc-b800-4b59-98d0-87519932210e.png)

-   [TypeScript](https://www.typescriptlang.org) language
-   [NodeJs](https://nodejs.org) / [NestJs](https://github.com/nestjs/nest)
-   [Nx](https://nx.dev)
-   [Angular](https://angular.io)
-   [RxJS](http://reactivex.io/rxjs)
-   [TypeORM](https://github.com/typeorm/typeorm)
-   [Ngx-admin](https://github.com/akveo/ngx-admin)

For Production, we recommend:

-   [PostgreSQL](https://www.postgresql.org)
-   [PM2](https://github.com/Unitech/pm2)

Note: thanks to TypeORM, Gauzy will support lots of DBs: SQLite (default, for demos), PostgreSQL (development/production), MySql, MariaDb, CockroachDb, MS SQL, Oracle, MongoDb and others, with minimal changes.

#### See also README.md and CREDITS.md files in relevant folders for lists of libraries and software included in the Platform, information about licenses and other details.

## Documentation
![image](https://user-images.githubusercontent.com/6468571/181062811-309b8163-a403-4be9-822f-b143c1e29528.png)

Please refer to our official [Platform Documentation](https://docs.gauzy.co) and to our [Wiki](https://github.com/ever-co/ever-gauzy/wiki) (WIP).

## Quick Start
![image](https://user-images.githubusercontent.com/6468571/181062849-99cf49dd-4dd7-4190-ab31-284505704f1b.png)

### With Docker Compose

- Clone repo.
- Verify that you have a local copy of Docker Compose installed (https://docs.docker.com/compose/install).
- Paste the contents of the '.env.compose' file into the '.env' file located at the root of the mono-repo repository (file contains default env variables definitions). In certain configurations, the '.env.compose' file is used instead of the '.env.sample' file; thus, it is imperative that you utilize the appropriate file.
- If you wish to operate the platform using our prebuilt Docker images, you will need to execute the command "docker-compose -f docker-compose.demo.yml up." (It is important to note that it utilizes the most recent images that have been pre-built automatically from the "master" branch head using Github CI/CD.) - If you wish to create everything (code and Docker images) on your own machine, use the command "docker-compose up." (It is important to note that this procedure takes a very lengthy time; the alternative above is significantly quicker.) the moment has come for coffee... Even if you used prebuilt Docker images, it may still take our API some time to seed bogus data into the database on the very first run of Docker Compose. This may be the case even if you used prebuilt Docker images.
Launch your web browser and go to http://localhost:4200.
- The Super Admin user may get in by using the email address "admin@ever.co" and the password "admin."
- To access the Employee user dashboard, use the email address "employee@ever.co" and the password "123456."
- Enjoy!

Together with Gauzy, Docker Compose will run following:

-   [PostgreSQL](https://www.postgresql.org)
-   Cross-platform client for PostgreSQL DBs [pgweb](https://github.com/sosedoff/pgweb), on <http://localhost:8081>.
-   [Franchise](https://github.com/HVF/franchise), lightweight but powerful SQL tool with a notebook interface, on <http://localhost:8082>.
-   [OmniDb](https://github.com/OmniDB/OmniDB), on <http://localhost:8083> and using default credentials (admin:admin) configure connection string `postgres://postgres:root@db:5432/postgres?sslmode=disable`.
-   [Adminer](https://www.adminer.org) Database management in a single PHP file, on <http://localhost:8084>.

### Manually

- Download and install the Long-Term Support (LTS) version of [NodeJs] (https://nodejs.org/en/download), such as 14.x (note: at the time, Gauzy may not operate with Node 15.x/16.x).
- You have the option to install and run [PostgreSQL] version 11 or 12 (https://www.postgresql.org), however doing so is not required (version 13 might not be supported yet). Note that TypeORM allows for manual configuration of other databases as well. SQLite has been selected as the default database (this choice is suggested just for testing and demonstration reasons).
- If you don't already have it, install [Yarn] (https://github.com/yarnpkg/yarn) by typing 'npm I -g yarn' in the terminal.
- Use the command "yarn bootstrap" to install the NPM packages and the bootstrapping solution.
- Please make sure to execute "yarn prepare:husky" if you anticipate having to make modifications to the code (and submit those changes to the Git repository).
- Modify the settings in the file called ".env.local," which is used for local executions (https://github.com/ever-co/ever-gauzy/blob/develop/.env.local).
- As an alternative, you may transfer the '.env.sample' file to the '.env' file and modify the default settings there, such as the database type, name, user, and password, among other things. This file can be found at https://github.com/ever-co/ever-gauzy/blob/develop/.env.sample.
- You may execute 'yarn seed:all' if you wish to seed a large amount of false data for demonstration purposes as an optional step.
- The command "yarn start" will run both the user interface and the application programming interface.
- In your web browser, go to http://localhost:4200 to access the Gauzy UI. The API may be accessed via http://localhost:3000/api.
- The Super Admin user may get in by using the email address "admin@ever.co" and the password "admin."
- To access the Employee user dashboard, use the email address "employee@ever.co" and the password "123456."
- Enjoy!

Notes:

- When the API is started for the first time, the database will be seeded automatically with a minimal set of starting data if there are no users discovered.
- You are able to execute seed at any time manually (for example, if you altered the entity schemas) using the 'yarn seed' command in order to re-initialize the database (caution: this is hazardous for production!).
- The command "yarn seed:all" enables the development of an extraordinarily huge quantity of bogus data, which may be used for demonstration or testing reasons (caution: the process usually takes less than ten minutes to finish).

### Production

-   See [Setup Gauzy for Client Server](https://github.com/ever-co/ever-gauzy/wiki/Setup-Gauzy-for-Client-Server) for more information about production setup on your servers.
-   For simple deployments scenarios (e.g. for yourself or your own small organization), check our [Kubernetes configurations](https://github.com/ever-co/ever-gauzy/tree/develop/.deploy/k8s), which we are using to deploy Gauzy demo into [DigitalOcean k8s cluster](https://www.digitalocean.com/products/kubernetes).
-   In addition, check [Gauzy Pulumi](https://github.com/ever-co/ever-gauzy-pulumi) project (WIP), it makes complex Clouds deployments possible with a single command (`pulumi up`). Note: it currently supports AWS EKS (Kubernetes) for development and production with Application Load Balancers and AWS RDS Serverless PostgreSQL DB deployments. We also implemented deployments to ECS EC2 and Fargate Clusters in the same Pulumi project.

## Contribute

-   Please give us :star: on Github, it **helps**!
-   You are more than welcome to submit feature requests in the [separate repo](https://github.com/ever-co/feature-requests/issues)
-   Pull requests are always welcome! Please base pull requests against the _develop_ branch and follow the [contributing guide](.github/CONTRIBUTING.md).

## Contributors
![image](https://user-images.githubusercontent.com/6468571/181062900-105a313e-3f9b-434e-826f-32133252ff0e.png)

View full list of our [contributors](https://github.com/ever-co/ever-gauzy/graphs/contributors).

## Contact Us
![image](https://user-images.githubusercontent.com/6468571/181062935-711c286f-19ac-4249-87f0-d74d47d6d288.png)

-   [Ever.co Website Contact Us page](https://ever.co/contacts)
-   [Slack Community](https://join.slack.com/t/gauzy/shared_invite/enQtNzc5MTA5MDUwODg2LTI0MGEwYTlmNWFlNzQzMzBlOWExNTk0NzAyY2IwYWYwMzZjMTliYjMwNDI3NTJmYmM4MDQ4NDliMDNiNDY1NWU)
-   [Discord Chat](https://discord.gg/hKQfn4j)
-   [Spectrum Community](https://spectrum.chat/gauzy)
-   [Gitter Chat](https://gitter.im/ever-co/gauzy)
-   [CodeMentor](https://www.codementor.io/evereq)
-   For business inquiries: <mailto:gauzy@ever.co>
-   Please report security vulnerabilities to <mailto:security@ever.co>
-   [Gauzy Platform @ Twitter](https://twitter.com/gauzyplatform)
-   [Gauzy Platform @ Facebook](https://www.facebook.com/gauzyplatform)

## Security
![image](https://user-images.githubusercontent.com/6468571/181062982-b323fd14-b58d-4535-862d-71992c6e0276.png)

Gauzy™ follows good security practices, but 100% security cannot be guaranteed in any software!  
Gauzy™ is provided AS IS without any warranty. Use at your own risk!  
See more details in the [LICENSE](LICENSE.md).

In a production setup, all client-side to server-side (backend, APIs) communications should be encrypted using HTTPS/WSS/SSL (REST APIs, GraphQL endpoint, Socket.io WebSockets, etc.).

If you discover any issue regarding security, please disclose the information responsibly by sending an email to <mailto:security@ever.co> or on  [![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev) and not by creating a GitHub issue.

## License
![image](https://user-images.githubusercontent.com/6468571/181063013-b21bc94c-51fe-4fda-8ca8-d4ff0b7c6324.png)

We are happy to provide our support to the open-source community. If you are working on awesome non-profit or open-source projects, we are happy to assist you and will provide (subject to the [acceptance criteria](https://github.com/ever-co/ever-gauzy/wiki/Free-license-and-hosting-for-Non-profit-and-Open-Source-projects) an Ever Gauzy Enterprise edition license and a free hosting option for your projects! In order to make a request, you are welcome to get in touch with us at ever@ever.co. More specifics described in our [Wiki](https://github.com/ever-co/ever-gauzy/wiki/Free-license-and-hosting-for-Non-profit-and-Open-Source-projects).

This software is available under following licenses:

-   [Ever® Gauzy™ Platform Community Edition](https://github.com/ever-co/ever-gauzy/blob/master/LICENSE.md#gauzy-platform-community-edition-license)
-   [Ever® Gauzy™ Platform Small Business](https://github.com/ever-co/ever-gauzy/blob/master/LICENSE.md#gauzy-platform-small-business-license)
-   [Ever® Gauzy™ Platform Enterprise](https://github.com/ever-co/ever-gauzy/blob/master/LICENSE.md#gauzy-platform-enterprise-license)

#### The default Ever® Gauzy™ Platform license, without a valid Ever® Gauzy™ Platform Enterprise or Ever® Gauzy™ Platform Small Business License agreement, is the Ever® Gauzy™ Platform Community Edition License.

#### Please see [LICENSE](LICENSE.md) for more information on licenses. You can also [compare our offering](https://ever.co/compare-gauzy/#compare).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fever-co%2Fgauzy.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fever-co%2Fgauzy?ref=badge_large)

## Trademarks
![image](https://user-images.githubusercontent.com/6468571/181063047-0c9927c6-c9ad-4655-aa50-06d1032dd7e8.png)

**Ever**® is a registered trademark of [Ever Co. LTD](https://ever.co).  
**Ever® Demand™**, **Ever® Gauzy™** and **Ever® OpenSaaS™**  are all trademarks of [Ever Co. LTD](https://ever.co).

Unless Ever Co. LTD. has provided express written clearance to do so, the trademarks may not be used in any manner to promote or market products or services that are in direct competition with Ever Co. LTD.

Every other brand and product name is either a trademark, a registered trademark, or a service mark that belongs to the firm or person who owns that name. Trademarks and registered trademarks are the strongest forms of intellectual property protection.

## Copyright
![image](https://user-images.githubusercontent.com/6468571/181063084-dc7d31e9-8fbd-44d3-814a-e9e0e72aa12d.png)

#### Copyright © 2019-present, Ever Co. LTD. All rights reserved.

![visitors](https://visitor-badge.laobi.icu/badge?page_id=ever-co.gauzy-platform)
[![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev)
[![Circle CI](https://circleci.com/gh/ever-co/ever-gauzy.svg?style=svg)](https://circleci.com/gh/ever-co/ever-gauzy)
[![codecov](https://codecov.io/gh/ever-co/ever-gauzy/branch/master/graph/badge.svg)](https://codecov.io/gh/ever-co/ever-gauzy)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8e0f1c13c3d94f18b1523b896d4500aa)](https://www.codacy.com/manual/Ever/ever-gauzy?utm_source=github.com&utm_medium=referral&utm_content=ever-co/ever-gauzy&utm_campaign=Badge_Grade)
[![DeepScan grade](https://deepscan.io/api/teams/3293/projects/16703/branches/363423/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3293&pid=16703&bid=363423)
[![Known Vulnerabilities](https://snyk.io/test/github/ever-co/ever-gauzy/badge.svg)](https://snyk.io/test/github/ever-co/ever-gauzy)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/ever-co/ever-gauzy.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ever-co/ever-gauzy/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ever-co/ever-gauzy.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ever-co/ever-gauzy/context:javascript)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fever-co%2Fever-gauzy.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fever-co%2Fgauzy?ref=badge_shield)
[![Crowdin](https://badges.crowdin.net/e/1d2b3405d65a56ec116d0984fd579cc9/localized.svg)](https://ever.crowdin.com/gauzy)

## P.S.
![image](https://user-images.githubusercontent.com/6468571/181063117-1b0b4cab-3fca-4838-be79-db91e862a2d3.png)

-   If you interested to run on-demand (delivery) or digital marketplace business, check open-source [Ever Demand Platform](https://github.com/ever-co/ever-demand)
-   [We are Hiring: remote TypeScript / NestJS / Angular developers](https://github.com/ever-co/jobs#available-positions)
