(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0def4598-1554-473b-80cd-c0462329e45f",e._sentryDebugIdIdentifier="sentry-dbid-0def4598-1554-473b-80cd-c0462329e45f")}catch{}})();const o=`here is an original instruction from Microsoft how to integrate with app center:

https://learn.microsoft.com/en-us/appcenter/sdk/getting-started/react-native#3-add-the-app-center-sdk-modules

here is good description what is app center codepush

https://learn.microsoft.com/en-us/appcenter/distribution/codepush/


## Prerequisites

This guide assumes you have access to [Appcenter](https://appcenter.ms/) (via authentication provider such as [GitHub](https://appcenter.ms/auth/github),
[Facebook](https://appcenter.ms/auth/facebook), [Microsoft](https://appcenter.ms/auth/aad), [Google](https://appcenter.ms/auth/google))
to access Appcenter UI and CLI, account on Revopush to where you will be migrating your applications,
necessary developer tools installed on your machine (eg [Node.js](https://nodejs.org/en), npm, yarn, npx, Android Studio, Xcode, VS Code, etc.)
which you used to use for your React Native application development, you should have permissions to install npm packages globally for further CodePush updates.

Below we will walk you step-by-step through the process of migrating your OTA from Appcenter to Revopush.
Feel free to skip any steps that you have already completed or familiar with but we recommend you check all of them to avoid any potential errors.

### Appcenter Command Line Interface
You manage most of CodePush's functionality using the App Center CLI.
If you had one installed, you can update it to the latest version by running the following command:

\`\`\`shell
   npm update -g appcenter
\`\`\`

or install it from scratch by running the following command:

\`\`\`shell
   npm install -g appcenter@latest
\`\`\`

Upon installation or update, you can check the version of the App Center CLI by running the following command:

\`\`\`shell
   appcenter -h
\`\`\`

which will display the version of the App Center CLI you have installed with available commands.

\`\`\`shell
$ appcenter -h 

Visual Studio App Center helps you build, test, distribute, and monitor mobile apps.
Version 3.0.3

Usage: appcenter <command>

Commands:
    analytics                      View events, audience info, sessions, and other analytics for apps                                                        
    apps                           View and manage apps                                                                                                      
    build                          Start builds, get their status, and download artifacts                                                                    
    codepush                       View and manage CodePush deployments and releases                                                                         
    crashes                        Upload symbols for better crash reports                                                                                   
    distribute                     Send builds to testers and manage distribution groups                                                                     
    orgs                           Manage organizations                                                                                                      
    profile                        Manage your profile                                                                                                       
    telemetry                      Manage telemetry preferences                                                                                              
    test                           Start test runs and get their status                                                                                      
    tokens                         Manage API tokens                                                                                                         
    help                           Get help using appcenter commands                                                                                         
    login                          Log in                                                                                                                    
    logout                         Log out                                                                                                                   
    setup-autocomplete             Setup tab completion for your shell 
\`\`\`

### Revopush Command Line Interface
Similarly to Appcenter Revopush manages the most of CodePush's functionality using CLI.

To install it run the following command:

\`\`\`shell
   npm install -g @revopush/code-push-cli
\`\`\`

We also suggest you to periodically update the CLI to the latest version by running the following command:

\`\`\`shell
   npm update -g @revopush/code-push-cli
\`\`\`

Upon installation or update, you can check the version of the Revopush CLI and the list of available commands by running the following command:

\`\`\`shell
   revopush -h
\`\`\`

which will display the version of the Revopush CLI you have installed with available commands.

\`\`\`shell
alexey@C7NTHHX3WG cli % revopush -h
 ____                 ____            _     
|  _ \\ _____   _____ |  _ \\ _   _ ___| |__  
| |_) / _ \\ \\ / / _ \\| |_) | | | / __| '_ \\ 
|  _ <  __/\\ V / (_) |  __/| |_| \\__ \\ | | |
|_| \\_\\___| \\_/ \\___/|_|    \\__,_|___/_| |_| CLI v0.0.1
============================================
Revopush is a service that enables you to deploy mobile app updates directly to your users devices. Visit our website https://revopush.org/ 

Usage: revopush <command>

Commands:
  revopush access-key     View and manage the access keys associated with your account
  revopush app            View and manage your CodePush apps
  revopush collaborator   View and manage app collaborators
  revopush debug          View the CodePush debug logs for a running app
  revopush deployment     View and manage your app deployments
  revopush login          Authenticate with the CodePush server in order to begin managing your apps
  revopush logout         Log out of the current session
  revopush patch          Update the metadata for an existing release
  revopush promote        Promote the latest release from one app deployment to another
  revopush register       Register a new CodePush account
  revopush release        Release an update to an app deployment
  revopush release-react  Release a React Native update to an app deployment
  revopush rollback       Rollback the latest release for an app deployment
  revopush session        View and manage the current login sessions associated with your account
  revopush whoami         Display the account info for the current login session

Options:
      --help     Show help  [boolean]
  -v, --version  Show version number  [boolean]

\`\`\`

Alright, now you have both Appcenter and Revopush CLIs installed and ready to use. Let's rock!


### Login to Appcenter and Revopush CLI

Execute the following command to login to Appcenter CLI using provider of your choice (GitHub, Facebook, Microsoft, Google):

\`\`\`shell
  appcenter login
\`\`\`

Similarly, in a separate window login to Revopush CLI using the following command:

\`\`\`shell
  revopush login
\`\`\`

### Define the list of application to migrate
After login you can check the list of apps you have access to by running the following command:

\`\`\`shell
  appcenter apps list
\`\`\`

Which will display something like this:

\`\`\`shell
$ appcenter apps list
  ashirman/rn2_android
  ashirman/rn2_ios
\`\`\`

For given guide we assume that \`ashirman/rn2_android\` is the React Native application for Android and \`ashirman/rn2_ios\`
is the React Native application for iOS.
You can check target OS of the app using command \`appcenter apps show -a <app name heer>\` for instance

\`\`\`shell
alexey@C7NTHHX3WG docs % appcenter apps show -a ashirman/rn2_android
App Secret:            6c3cb412-015f-422f-b795-af52d0b36a5f
Description:           
Display Name:          rn2_android
Name:                  rn2_android
OS:                    Android
Platform:              React-Native
Release Type:          Alpha
Owner ID:              a1265e53-0599-4340-8003-7c40f0caff38
Owner Display Name:    Alexey Shirmanov
Owner Email:           ashirman8@gmail.com
Owner Name:            ashirman
Azure Subscription ID: 
\`\`\`

And for iOS:

\`\`\`shell
alexey@C7NTHHX3WG docs % appcenter apps show -a ashirman/rn2_ios    
App Secret:            37d0dce7-a991-4ccc-9a0c-1ff8ed00f42d
Description:           
Display Name:          rn2_ios
Name:                  rn2_ios
OS:                    iOS
Platform:              React-Native
Release Type:          
Owner ID:              a1265e53-0599-4340-8003-7c40f0caff38
Owner Display Name:    Alexey Shirmanov
Owner Email:           ashirman8@gmail.com
Owner Name:            ashirman
Azure Subscription ID: 
\`\`\`

### Create applications in Revopush

Now you have to create applications in Revopush for each of the applications you have in Appcenter.
Please keep in mind, compare to Appcenter, Revopush does not accept username (\`<username>/<app name>\`) as an application name,
you just need to take part after \`<username>\` in the Appcenter app name. For example:

\`ashirman/rn2_ios\` becomes \`rn2_ios\`,
\`ashirman/rn2_android\` becomes \`rn2_android\`.

Having these names execute the following command to create applications:
\`\`\`shell
  revopush app add rn2_ios
\`\`\`

with response like
\`\`\`shell
Successfully added the "rn2_ios" app, along with the following default deployments:
┌────────────┬────────────────────────────────────────┐
│ Name       │ Deployment Key                         │
├────────────┼────────────────────────────────────────┤
│ Production │ Z7v_81HyATiWlqZjvQFyu9GIicXAVJHvdy5W-g │
├────────────┼────────────────────────────────────────┤
│ Staging    │ PjAEsKZUdAytb5Rq3Kb6yHVfn-H3VJHvdy5W-g │
└────────────┴────────────────────────────────────────┘
\`\`\`

and another one for Android:
\`\`\`shell
  revopush app add rn2_android
\`\`\`

with response like
\`\`\`shell
Successfully added the "rn2_android" app, along with the following default deployments:
┌────────────┬────────────────────────────────────────┐
│ Name       │ Deployment Key                         │
├────────────┼────────────────────────────────────────┤
│ Production │ EVGdS0GR4Sus584cdyZ95wmwI405VJHvdy5W-g │
├────────────┼────────────────────────────────────────┤
│ Staging    │ pkCafa80S-ji3y6Xey6zVcEju9AHVJHvdy5W-g │
└────────────┴────────────────────────────────────────┘
\`\`\`

Out of the box, Revopush will also create two deployments (Staging and Production) the applications you have created.
It empowers you to use the best practices of [Multi-Deployment Testing](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/rn-deployment).
You can add more deployments later or delete if you need to. You do not have to remember these deployments keys,
you can always take them using Revopush CLI.

### Replicate Appcenter Deployments in Revopush

Revopush allows you to create multiple deployments for each application with the same deployment keys as you have in Appcenter.
The reason for that is that these keys are treated as a sort of secrets (for instance somewhere in your CI/CD pipeline,
environment variables on developer machine or build server, etc).
To reduce friction in migration process we empower you to reuse these keys in Revopush deployments.

To replicate the same deployments as you have in Appcenter in Revopush, you need to retrieve the deployment and its keys from Appcenter.

Run the following command:

\`\`\`shell
  appcenter codepush deployment list -k -a ashirman/rn2_ios
\`\`\`

which will display something like this:
\`\`\`shell
┌────────────┬────────────────────────────────────────┐
│ Name       │ Key                                    │
├────────────┼────────────────────────────────────────┤
│ Production │ xJeOl4A5No7c9-wJv8HLj1ktmmKeP5awD0us5u │
├────────────┼────────────────────────────────────────┤
│ Staging    │ ZFZiSAKLUL_QmBXeWAcSkpv87fkaDeWu1W0TOs │
└────────────┴────────────────────────────────────────┘
\`\`\`

Add Revopush deployment for iOS with the same keys running command to replicate Staging
\`\`\`shell
revopush deployment add rn2_ios appcenter_Staging -k ZFZiSAKLUL_QmBXeWAcSkpv87fkaDeWu1W0TOs
\`\`\`

and the following command to replicate Production
\`\`\`shell
revopush deployment add rn2_ios appcenter_Production -k xJeOl4A5No7c9-wJv8HLj1ktmmKeP5awD0us5u
\`\`\`

where:
- rn2_ios is the application name in Revopush
- appcenter_Staging and appcenter_Production are the deployment names in Revopush (the same as in Appcenter but for sake of clarity we added \`appcenter_\` prefix)
- \`ZFZiSAKLUL_QmBXeWAcSkpv87fkaDeWu1W0TOs\` is the deployment key for Staging in Appcenter
- \`xJeOl4A5No7c9-wJv8HLj1ktmmKeP5awD0us5u\` is the deployment key for Production in Appcenter

Help tip:
Until you have any users with completed migration done in mobile app it totally fine to delete the deployment in Revopush.
You can even add deployment keys values (\`-k\` part) that follows your own naming convention. The only requirement is that it must unique
(so we could identify deployment exactly by it when mobile app request updates).
If you mess it up and wish to delete the deployment
run the following command:

\`\`\`shell
revopush deployment rm rn2_ios appcenter_Staging
\`\`\`\`
Yoo need to execute it you tried to use the same deployment key for multiple deployments. In that you would get the error like this:

\`\`\`shell
[Error]  The specified entity already exists.
RequestId:6ff2520b-2002-0025-3d1a-6c433e000000
Time:2025-01-21T15:38:05.1562382Z
\`\`\`

so, delete broken deployment in that case and create it again with the correct unique key.


and the same for Android

\`\`\`shell
  appcenter codepush deployment list -k -a ashirman/rn2_android
\`\`\`

with keys like these

\`\`\`shell
┌────────────┬────────────────────────────────────────┐
│ Name       │ Key                                    │
├────────────┼────────────────────────────────────────┤
│ Production │ PQPwJaW63MTPI8T__u168qJm7Vq7Mn0UJ94MMR │
├────────────┼────────────────────────────────────────┤
│ Staging    │ 4tK3WlLhumcwaukx68Irq04XqS_3R4H6N-lV-z │
└────────────┴────────────────────────────────────────┘
\`\`\`

Now you can create the same deployments in Revopush for each application by running the following command:

\`\`\`shell
  revopush deployment add rn2_ios appcenter_Production -k xJeOl4A5No7c9-wJv8HLj1ktmmKeP5awD0us5u
\`\`\`


After this step you should have application-to-target-OS mapping because Revopush requires you to specify platform explicitly (ios/android)
at the moment of update releases. We will show you examples of how to release updates for both platforms later in this guide.

Revopush CLI has similar command to list the apps you have access to:

\`\`\`shell
  revopush app list
\`\`\`


Please keep in mind that OTA updates for any other React Native platforms except **iOS** and **Android** (such as [tvOS](https://github.com/react-native-tvos/react-native-tvos),
[Scia](https://github.com/react-native-skia/react-native-skia), [Web](https://github.com/necolas/react-native-web),
[visionOS](https://github.com/callstack/react-native-visionos), your own platforms) are not supported by Revopush at the moment.

All in all you should know target OS/platform for every application you wish to migrate.

### Appcenter Deployments

Following [the best practices](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/rn-deployment)
to effectively test your releases, it's critical that you use the Staging and Production (or even more) deployments to
never release an update to your end users that you haven't been able to validate yourself.

At Revopush we have the same concept of deployments as Appcenter has. Promote your releases to next stage only
after you have tested them on the previous stage.

To replicate this experience in Revopush, you can create the same deployments as you have in Appcenter by running the following command:

\`\`\`shell
  appcenter codepush deployment add -a <app name here> Staging
  appcenter codepush deployment add -a <app name here> Production
\`\`\`

In case of Revopush we have to install the following package:

npm install -g @revopush/code-push-cli 
`;export{o as m};
//# sourceMappingURL=index-BCZftjfu.js.map
