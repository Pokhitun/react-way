import style from './Profile.module.css'
const Profile = () =>{
    return(
        <div className={style.content}>
        <img className ={style.fonImg} src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg' />
          <div>
            <img src ='https://archilab.online/images/1/123.jpg'/>
          </div>
          <div className={style.posts}>
                <div className={style.item}>
                    post 1        
                </div>
                <div className={style.item}>
                    post 2        
                </div>
                <div className={style.item}>
                    post 3        
                </div>
            </div>
        </div>
    );
} 

export default Profile;