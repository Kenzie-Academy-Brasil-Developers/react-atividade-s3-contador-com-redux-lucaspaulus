import React from 'react';
import * as S from "./style.js"

function Ball({children, animate}) {
    


    return (
        <S.Container>
            <S.Ball animate={animate}>{children}</S.Ball>
             
        </S.Container>
    )
}

export default Ball;
