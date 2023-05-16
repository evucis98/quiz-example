**Usage:**

1. Clone/Download this repo
2. Run `yarn restart`
3. Run `yarn ios` in a second terminal tab
4. Go read React/JSX style guide 👀
5. Go code 🚀

**Managing locales:**

We're currently using [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/). Boilerplate
includes a working locale demo with language change handler.

Changing language is easy:

```
import { locale } from 'src/utils/locale';

const languageHandler = (lang) => {
    locale.changeLanguage(lang);
}
```

Locale config can be found in `src/utils/locale/`. Language files are located at `src/assets/locale/`.

## Development prerequisites

- Yarn
- Node
- Cocapods
- Xcode
- Android Studio
- react-native-cli

## Run application

**NOTE:** We always use **Yarn** as our default package manager tool.

```bash
// start development server
yarn start

// run ios app
yarn ios

// run android app
yarn android
```
