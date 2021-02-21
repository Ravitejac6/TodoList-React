import * as React from 'react';
interface Props{
    arr: Todo[];
}
export const Todo: React.FC<Props> = ({arr}) =>(
    <React.Fragment>
        {
            arr.map((item:Todo) =>(
                <div key={item.id}>{item.text}</div>
            ))
        }
    </React.Fragment>
)