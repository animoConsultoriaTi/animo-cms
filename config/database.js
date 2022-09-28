module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "containers-us-west-21.railway.app",
      port: 6490,
      database: "railway",
      user: "postgres",
      password: "vxC3z5Zg7Clp9EdZagdh",
    },
    useNullAsDefault: true,
  },
});
