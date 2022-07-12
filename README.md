
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
./o install -[client_name_here]
```

for example;

```bash
./o install -my_new_project
```


## Sharing Assets with Native Clients

You can use the standard method for sharing code, components & assets with an Overlord Native Client and let our systems
take care of the rest for you.

```bash
./o share -[file_to_share] -[client_to_share_it_with]
```


## Making a new Component

Begin by navigating to the `components` folder inside your new native-client. Then create a folder with the name of your
new component in all lowercase characters, or camel case.

Then create a `.tsx` file for your component and a `.styles.ts` file for your style sheet. This is considered good
practice for working within Overlord, however you have the option to include your style sheet in the same file as your
component (in the .tsx file).

```
-- components/
---- myNewComponent/
------ myNewComponent.styles.ts
------ myNewComponent.tsx
```

Once you've created your new component file; follow standard React or React-Native standards and always capitalize the
first letter of your component name. For example; `MyNewComponent`.


## Adding new Assets

The `assets` directory will store all of your applications static assets such as `.svg` or `.png` images. You can feel
free to organize your assets however you please. You may consider storing them within folders or just leaving them all
on the top layer as this will make importing them in your code easier.

Feel free to pick which ever method makes more sense to you.

```
-- assets/
---- cuteCat.jpeg
```

or

```
-- assets/
---- animals/
------ cuteCat.jpeg
```

## Sharing or Making a new Library

At some point or another you'll want to use an Overlord TypeScript Library within your application or make a library
yourself to complete various tasks through out your project.

Similarly to your assets; your libraries organization is entirely up to you. However we recommend a pragmatic
directorial organization approach and store your libraries in modules (folders). This will make sharing your code with
another application much easier if you chose to do so in the future.

```
-- library/
---- server.ts
```

or

```
-- library/
---- veryCoolAPI/
------ server.ts
```
