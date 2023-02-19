const baseURL='http://owu.linkpc.net/carsAPI/v1'


const auth='/auth'

const urls={
    cars:'/cars',
    auth:{
        login:auth,
        refresh:`${auth}/refresh`,
        me:`${auth}/me`
    },
    users:'/users'
}

export {urls,baseURL}