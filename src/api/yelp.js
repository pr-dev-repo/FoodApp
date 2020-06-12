import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 7Yrzd0d8i8bWWHFV0A1Mrg5HODzF-vUUGAW_Xvgddq3eOUUJaj6MolXDjCkr4q3LnQYacZZA2GdpLJdl4li59J_1I28M_XRWHer-U7UY9bnTcqMnZOVo9Iv-MVDhXnYx'
    }
});