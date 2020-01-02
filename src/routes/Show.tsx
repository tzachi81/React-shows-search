import React from 'react';

interface Props{
    q: string,
    shows: any,
    id: number
}

export const Show: React.FC<Props> = ({q, shows, id}) => {
    return(
        <div>Shows Partial</div>
    )
}
