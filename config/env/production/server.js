module.exports = ({ env }) => ({
    url: env("https://testappimran123.herokuapp.com/"),
    app: {
        keys: [
        "y9i/S574qW9WqMbzapXzQQ==",
        "08J+COoqxw+Bq0dBeXZGXg==",
        "s+TY7zlHoB8WYEW1jhrMsg==",
        "1j1f48kNK4RTL5dZ8hMoUw==",
        ],
    },
});
// module.exports = ({ env }) => ({
//     host: env("HOST", "0.0.0.0"),
//     port: env.int("PORT", 1337),
//     app: {
//         keys: env.array("APP_KEYS"),
//     },
// });
