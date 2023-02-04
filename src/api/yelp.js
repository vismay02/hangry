import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer dLDOkgySF0UcaIdMJ-4KGrN2qdKJ0O64nzrG6fKLYKxOERODqFqEm1j_FGIUGwmO5edhwoVgQR0Ch_QDPKUy3kjGb-1UGL46L3Pq9-YP62BysI0fOg1TslXPCWHeY3Yx'
    }
})