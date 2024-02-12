import React from 'react'
import styled from 'styled-components'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
const TopComponent = ({ data, setIp, checkIp }) => {


    return (
        <Container>
            <h1>IP Address Tracker</h1>

            <InputContainer>
                <input type="text" onChange={(e) => setIp(e.target.value)} value={data?.ip || ""}></input>
                <button onClick={checkIp}><KeyboardArrowRightRoundedIcon /></button>
            </InputContainer>


            <DetailContainer>
                <DetailTiles>
                    <h6>IP Address</h6>
                    <p>{data?.ip}</p>
                    <div></div>
                </DetailTiles>
                <DetailTiles>
                    <h6>Location</h6>
                    <p>{data?.location?.city}{data?.location?.region && `, ${data?.location?.region}`}</p>
                    <div></div>
                </DetailTiles>
                <DetailTiles>
                    <h6>TimeZone</h6>
                    <p>{data?.location && `UTC ${data?.location?.timezone}`}</p>
                    <div></div>
                </DetailTiles>
                <DetailTiles>
                    <h6>Isp</h6>
                    <p>{data?.isp}</p>
                </DetailTiles>


            </DetailContainer>



        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:400px;

    background:url("/images/pattern-bg-desktop.png") center center /cover no-repeat fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding:2rem;
    h1{
        color:white
    }
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    input{
        background-color: white;
        border-radius: 1rem 0 0 1rem;
        /* height: 50px; */
        font-size:18px;
        border: transparent;
        width: 50%;
        max-width: 500px;
        padding: 1rem 2rem;

        &:focus{
            outline: none;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(63,63,63);
        border-radius: 0 1rem 1rem 0;
        border: transparent;
        padding:1rem;
        color:white;
        cursor:pointer
    }
`

const DetailContainer = styled.div`

    display: flex;
    z-index: 3;
    padding: 1rem;
    background-color: white;
    position:absolute;
    bottom:0;
    max-width: 90%;
    border-radius: 0.5rem;
    transform: translate(0,50%);
    box-shadow: 0px 10px 20px 1px rgba(0,0,0,0.2);
    flex-wrap: nowrap;
    @media (max-width:768px){
        flex-wrap: wrap;
    }
`
const DetailTiles = styled.div`
    width:25%;
    min-width: 150px;
    padding:1.25rem;
    overflow-wrap: break-word;
    position: relative;
    padding-right: 2rem;

    @media (max-width:768px){
        min-width: 200px;
        width:50%;
    }
    @media (max-width:500px){
        text-align: center;
        width:100%;
    }
    h6{
        color:hsl(0, 0%, 59%);
        text-transform: uppercase;
    }
    div{
        position: absolute;
        right: 0;
        top: 1rem;
        height: 70%;
        width: 0;
        border-right: 1px solid hsl(0, 0%, 59%);
        @media (max-width:768px){
        display:none
    }
    }
    
    p{
        margin-top: 0.5rem;
        font-size:1.25rem;
        font-weight: bold;
        color:hsl(0, 0%, 17%)
    }

`

export default TopComponent