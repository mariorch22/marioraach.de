import ImprintPresentation from '@/components/ui/imprint/ImprintPresentation';
import { ImprintData } from '@/types/imprint';

interface ImprintContentProps {
  data: ImprintData;
}

const ImprintContent = ({ data }: ImprintContentProps) => {
  return <ImprintPresentation data={data} />;
};

export default ImprintContent;