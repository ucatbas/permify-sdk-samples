# Permify Typescript SDK

This repository contains a sample usage for the Typescript gRPC SDK for Permify.

### Prerequisites

Ensure you have the following installed:
- npm
- typescript
- ts-node

### Cloning the Repository

To get started, clone the repository using the following command:

```sh
git clone https://github.com/ucatbas/permify-sdk-samples.git
cd permify-sdk-samples/typescript/grpc
```

### Building the Project

Install permify:
```sh
npm config set @buf:registry https://buf.build/gen/npm/v1/
npm install @buf/permifyco_permify.grpc_web@latest
```

### Running the Application

Create a typescript configuration file, `tsconfig.json` to let running javascript libraries: 

```json
{
    "compilerOptions": {
      "allowJs": true
    }
}
```

After successfully installing the package and configuration, you can run the application using the following command:
```sh
ts-node create_tenant.ts
```

## For your own Projects

Here is a simple permify client:

```typescript
import * as service_grpc from '@buf/permifyco_permify.grpc_node/base/v1/service_grpc_pb';
import { ChannelCredentials } from "@grpc/grpc-js";

const tenancyClient = new service_grpc.TenancyClient("127.0.0.1:3478", ChannelCredentials.createInsecure());
```
