import CompressTarget from '../_compress-target/CompressTarget';
import { buildMetadata } from '../_compress-target/meta';

export const metadata = buildMetadata('2mb');

export default function Page() {
  return <CompressTarget size="2mb" />;
}
