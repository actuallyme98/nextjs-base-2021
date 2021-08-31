const BEARER_SCHEMA_PREFIX = 'Bearer ';

export const tokenToBearerSchema = (token: string) => {
  return `${BEARER_SCHEMA_PREFIX}${token}`;
};

export const bearerSchemaToToken = (bearerSchema: string) => {
  return bearerSchema.replace(BEARER_SCHEMA_PREFIX, '');
};
