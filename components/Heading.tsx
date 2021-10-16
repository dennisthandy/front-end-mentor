import { FC } from 'react';

interface Props {
    label: string;
}

const Heading: FC<Props> = ({ label }) => <h1>{label}</h1>;

export default Heading;
