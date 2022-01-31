module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c07ef2122801563e3ca52f79e51c48d'),
  },
});
