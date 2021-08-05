import axios from 'axios';
import {Base_Api_Url} from './constants';

const getStory = async (id) => {
    try{
        const story = await axios.get(`${Base_Api_Url}/item/${id}.json`);
        return story;
    } catch (error){
      console.log('Error while getting a story.');
    }
};

export const getStories = async (type) =>{
    try{
        const {data: storyIds} = await axios.get(
            `${Base_Api_Url}/${type}stories.json`
        );
        const stories = await Promise.all(storyIds.slice(0,30).map(getStory));
        return stories;
    }catch (error) {
        console.log('Error while getting list of stories.');
    }
};
















