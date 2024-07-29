const service_grpc = require('@buf/permifyco_permify.grpc_node/base/v1/service_grpc_pb');
const service = require('@buf/permifyco_permify.grpc_node/base/v1/service_pb');
const { ChannelCredentials } = require('@grpc/grpc-js');

// Create a new client instance
const tenancyClient = new service_grpc.TenancyClient("127.0.0.1:3478", ChannelCredentials.createInsecure());

// Create a new TenantCreateRequest
const request = new service.TenantCreateRequest();
const timestamp = new Date().getTime().toString();

// Set tenant ID and name
let tenantId = "tenant_" + timestamp;
request.setId(tenantId);
request.setName("Tenant 1");

// Call the create method on the client
tenancyClient.create(request, (error, response) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Response:", response.toObject());
    }
});
