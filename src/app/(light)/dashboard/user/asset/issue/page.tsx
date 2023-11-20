import { apiPublic } from '@/services/protocol/api';

import { Stack, Typography } from '@mui/material';

import Form from './components/form';
export default async function IssueDataAsset() {
  const { dataModel } = await apiPublic.dataModelById({
    id: '1062d449-4ace-49d1-9b3b-1a8490ec89bf',
  });

  return (
    <Stack sx={{ my: 2 }}>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontWeight: 600,
        }}
      >
        Issue a Private Data Asset
      </Typography>
      <Typography variant="h3" component="h1">
        Complete your PDA details
      </Typography>
      <Form schema={dataModel.schema} />
    </Stack>
  );
}
