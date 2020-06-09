import i18n from "i18n-js";
import * as Localization from "expo-localization";

import en from "@locales/en.json";
import fr from "@locales/fr.json";

i18n.defaultLocale = "en";
i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = { en, fr };

export default i18n;
