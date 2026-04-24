const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { resourceFromAttributes } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4320'
});

const sdk = new NodeSDK({
  traceExporter,
  resource: resourceFromAttributes({
    [SemanticResourceAttributes.SERVICE_NAME]: 'smart-backend',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: 'development'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

console.log("OpenTelemetry + Tempo tracing started for smart-backend");
