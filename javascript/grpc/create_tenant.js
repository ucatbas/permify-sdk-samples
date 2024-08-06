const permify = require("@permify/permify-node");

const request = new permify.grpc.payload.TenantCreateRequest();
request.setId("t13333");
request.setName("lsjv");

const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined
});

client.tenancy.create(request).then((response) => {
    console.log(response);

    // handle response
})