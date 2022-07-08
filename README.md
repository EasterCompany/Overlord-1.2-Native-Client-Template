
# Overlord Native Client

Cross Platform Mobile &amp; Web Client for Overlord; which enables you to develop a single code base and deploy it too
Web, Android & iOS. Based on React-Native, React-Native-Web & Expo - we can utilize existing technologies which
integrate with Overlord's framework to provide the best cross-platform developer experience without losing SSR, CSR,
Native Features, JIT Compilation Features or any of the pro/con features you would argue for in the past.

Overlords Native Client supports update features which bypass Google &amp; Apples app store requirements. You can chose
to enable or disable this feature in your `app.json` file.
[Read the Expo Client documentation for more information.](https://docs.expo.dev/versions/latest/config/app/)

## Create a Native Client

To install a new native client template in your Overlord project run the following command in your terminal where ever
your `./o` file is located.

```bash
./o create -native -[new_client_name_here]
```

for example;

```bash
./o create -native -my_new_project
```

## Install a Native Client

To automatically install all your clients within your clients directory run the following command.

```bash
./o install -clients
```

or to manually specify the new native client you want to install.

```bash
./o install -clients -[client_name_here]
```

for example;

```bash
./o install -clients -my_new_project
```

## Sharing Assets with Native Clients

You can use the standard method for sharing code, components & assets with an Overlord Native Client and let our systems
take care of the rest for you.

```bash
./o share -[file_to_share] -[client_to_share_it_with]
```
