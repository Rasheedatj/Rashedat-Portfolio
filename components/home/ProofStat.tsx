import type { ProofStat as ProofStatData } from '@/types/home';

type ProofStatProps = {
  stat: ProofStatData;
};

const ProofStat = ({ stat }: ProofStatProps) => {
  return <li>{stat.label}</li>;
};

export default ProofStat;
