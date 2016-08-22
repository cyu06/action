import {ManagementClient} from 'auth0';
import {getDotenv} from '../../universal/utils/dotenv';

// Import .env and expand variables:
getDotenv();

export const auth0ManagementClient = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN || 'parabol.auth0.com',
  // eslint-disable-next-line max-len
  token: process.env.AUTH0_MANAGEMENT_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3M21CcmhpWEdzRTNEc3JTTWdwQXoyYlM2VnpMaE95SiIsInNjb3BlcyI6eyJ1c2VycyI6eyJhY3Rpb25zIjpbInVwZGF0ZSJdfSwidXNlcnNfYXBwX21ldGFkYXRhIjp7ImFjdGlvbnMiOlsicmVhZCIsInVwZGF0ZSIsImRlbGV0ZSIsImNyZWF0ZSJdfX0sImlhdCI6MTQ3MTYxOTUxOSwianRpIjoiOTlhZWMwOGMwNTU4MmFhMjg2MmZhMmNjNzk2YjQwODIifQ.f08OPPuvDQOaH6avwxKA9gHafpScF3pWYGfun7GkbDs'
});

export const clientSecret = process.env.AUTH0_CLIENT_SECRET ||
  'BksPeQQrRkXhDrugzQDg5Nw-IInub9RkQ-pSWohUM9s6Oii4xoGVCrK2_OcUCfYZ';