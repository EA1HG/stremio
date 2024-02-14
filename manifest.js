module.exports={
    id: "org.community.sdmx.vip",
    version: "",
    name: "STREMIO SPAIN IPTV",
    logo: "https://dl.strem.io/addon-logo.png",
    description: "Este complemento trae todas las transmisiones en vivo, transmisiones VOD y series de su suscripción de IPTV a su Stremio usando Xtream API.",
    types: ["peliculas", "series","tv","canales"],
    background: "https://r4.wallpaperflare.com/wallpaper/621/859/641/peliculas-terror-wallpaper-bda5087bfcbe0148dc15a37519065561.jpg",
    resources: ["peliculas","series","tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints:{configurable : true, configurationRequired: true },
};
