import * as service_grpc from '@buf/permifyco_permify.grpc_node/base/v1/service_grpc_pb';
import * as service from '@buf/permifyco_permify.grpc_node/base/v1/service_pb';
import { ChannelCredentials, ServiceError } from "@grpc/grpc-js";

const tenancyClient = new service_grpc.TenancyClient("127.0.0.1:3478", ChannelCredentials.createInsecure());

const request = new service.TenantCreateRequest();
const timestamp = new Date().getTime().toString();

let tenantId = "tenant_" + timestamp; 
request.setId(tenantId);
request.setName( "Tenant 1");

// Call the create method directly
tenancyClient.create(request, (error: ServiceError | null, response: service.TenantCreateResponse | null) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log(response.toObject());
    }
});


