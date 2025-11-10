import Imprint from '@/components/ui/imprint/Imprint';
import { ImprintData } from '@/types/imprint';

interface ImprintContainerProps {
  data: ImprintData;
}

const ImprintContainer = ({ data }: ImprintContainerProps) => {
  return <Imprint data={data} />;
};

export default ImprintContainer;
