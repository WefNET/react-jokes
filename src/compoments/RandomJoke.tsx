import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJoke } from '../store/actions/jokeActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const RandomJoke = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const [showPunchline, setShowPunchline] = React.useState(false);
    const { joke, loading, error } = useSelector((state: any) => state.joke as any);

    const getNewJoke = () => {
        dispatch(fetchJoke());
        setShowPunchline(false);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ p: 1, borderRadius: '0px', width: '800px', height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div onClick={() => getNewJoke()} style={{ width: '208px', height: '40px', borderRadius: 40, backgroundColor: '#7ac06e', color: 'white', fontSize: '18px', lineHeight: '40px', cursor: 'pointer' }}>Get A New Random Joke</div>
                        </div>
                        <div>
                            <a href='https://github.com/15Dkatz/official_joke_api' target='_blank'>View API Docs</a>
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {loading ? (
                            <p>LOADING YOUR JOKE...</p>
                        ) : error ? (
                            <p>THERE WAS AN ERROR LOADING YOUR JOKE.</p>
                        ) : joke.setup ? (
                            <>
                                <div className='fancy-pants left-quote'>“</div>
                                <div className='joke-text setup-text'>{joke.setup}</div>
                            </>
                        ) : null }
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button onClick={() => setShowPunchline(!showPunchline)}>{showPunchline ? 'Hide Punchline' : 'Show Punchline'}</button>
                        {showPunchline &&
                            <p>{joke.punchline}</p>
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default RandomJoke;