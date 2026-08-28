import CompressTarget from '../_compress-target/CompressTarget';
import { buildMetadata } from '../_compress-target/meta';

export const metadata = buildMetadata('100kb');

export default function Page() {
  return <CompressTarget size="100kb" />;
}
