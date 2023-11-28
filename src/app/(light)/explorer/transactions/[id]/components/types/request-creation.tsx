import ExternalLink from '@/components/external-link/external-link';
import RequestStatusChip from '@/components/requests/request-status-chip';
import { DATE_FORMAT } from '@/constants/date';
import routes from '@/constants/routes';
import { transaction, transaction_detail } from '@/locale/en/transaction';
import { Transaction_DetailQuery } from '@/services/protocol/types';
import { numberToMoneyString } from '@/utils/money';
import dayjs from 'dayjs';

import { Divider, Stack, Typography } from '@mui/material';

import CardRow from '../card-row';
import UserColumn from '../user-column';

export default function RequestCreation({
  data,
}: {
  data: Transaction_DetailQuery['transaction'];
}) {
  return (
    <Stack
      sx={{
        mb: 3,
        overflow: 'visible',
      }}
      divider={
        <Divider
          sx={{
            width: '100%',
          }}
        />
      }
    >
      <CardRow title={transaction_detail.request_id}>
        {data.metadata?.request}
      </CardRow>
      <CardRow title={transaction_detail.owner}>
        <UserColumn isLoading={false} user={data.to} />
      </CardRow>
      <CardRow title={transaction_detail.verifier}>
        <UserColumn isLoading={false} user={data.from} />
      </CardRow>
      <CardRow title={transaction_detail.request_template}>
        {data.metadata?.requestTemplate}

        <ExternalLink
          iconSxProps={{ fontSize: 20, color: 'text.primary' }}
          href={routes.explorer.requestTemplate(
            data.metadata.requestTemplate as string
          )}
          text=""
        />
      </CardRow>
      <CardRow title={transaction_detail.created_at}>
        {dayjs(data?.createdAt).format(DATE_FORMAT)}
      </CardRow>
      {data.cost && (
        <CardRow title={transaction_detail.cost}>
          {numberToMoneyString(data.cost as number)}
        </CardRow>
      )}
      <CardRow title={transaction_detail.status}>
        <RequestStatusChip variant="filled" status={data.metadata.status} />
      </CardRow>
    </Stack>
  );
}
