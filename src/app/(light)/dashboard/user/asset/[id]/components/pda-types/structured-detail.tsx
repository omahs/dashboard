import ClaimValuesList from '@/app/(light)/dashboard/components/claim-values-list/claim-values-list';
import GTWAvatar from '@/components/gtw-avatar/gtw-avatar';
import { DataModelQuery, PrivateDataAsset } from '@/services/protocol-v3/types';
import { WIDTH_CENTERED } from '@/theme/config/style-tokens';
import { claimToArray } from '@/utils/data-model';

import { Card, Stack, Typography } from '@mui/material';
type Props = {
  pda: PrivateDataAsset;
  dataModel: DataModelQuery['dataModel'];
};

export default function StructuredDetail({ dataModel, pda }: Props) {
  const claimArray = claimToArray(pda.dataAsset?.claim, dataModel.schema);
  return (
    <Stack gap={2} sx={WIDTH_CENTERED}>
      <Stack
        direction="column"
        component={Card}
        variant="outlined"
        gap={19.75}
        sx={{ bgcolor: '#E5DFEA' }}
        alignItems="start"
        p={2}
      >
        <Stack direction={'row'} alignItems="center" gap={2}>
          <GTWAvatar
            name={pda?.issuer?.did}
            alt={pda?.issuer?.username ?? pda?.issuer?.did}
            size={30}
          />
          <Typography
            variant="body2"
            id="pda-title"
            sx={{ fontSize: 16, fontWeight: 700 }}
          >
            {pda?.issuer?.username ?? pda?.issuer?.did}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          id="pda-title"
          sx={{
            fontSize: { xs: 20, md: 34 },
            fontWeight: 400,
          }}
        >
          {pda?.dataAsset?.title}
        </Typography>
      </Stack>
      <ClaimValuesList data={claimArray} />
    </Stack>
  );
}
