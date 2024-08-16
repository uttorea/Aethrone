import React from 'react';
import './AllBlogs.css';
import blogimg from '../../assets/blogimg.png'
import frtimg1 from '../../assets/frtimg1.png';
import DroneFails from '../DroneFails/DroneFails';
import DesignPartner from '../../Components/DesignPartner/DesignPartner';
import Footer from '../Footer/Footer';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

const blogData = [
    {
        id: 1,
        title: 'What is Your drone fails',
        description: 'Emergency parachute recovery system',
        date: 'Mar 18, 2024',
        img: frtimg1,
        btnText: 'Blogs',
        btnLink: '',
        isPrimary: true,
    },
    {
        id: 2,
        title: 'What if your drone fails',
        description: 'Emergency parachute recovery system',
        date: 'Mar 18, 2024',
    },
    {
        id: 3,
        title: 'Your design partner in defence',
        description: 'Design and development for aerospace, uav, defence sector',
        date: 'Mar 18, 2024',
    },
    {
        id: 4,
        title: 'Your design partner in defence',
        description: 'Design and development for aerospace, uav, defence sector',
        date: 'Mar 18, 2024',
    },
    {
        id: 5,
        title: 'Your design partner in defence',
        description: 'Design and development for aerospace, uav, defence sector',
        date: 'Mar 18, 2024',
    },
];

const AllBlogs = () => {
    return (
        <>
                    <div className='blogimg'>
                        <img src={blogimg} alt="" className='imgblog'/>
                        <div className='headingbolg'>
                    <HeadingComponent heading='Blogs'/>
                        </div>
                    </div>
            <div className="container mt-md-0 mt-4">
                <div className="blog_page">
                    <div className="row  row-cols-2">
                        <div className="col-sm-6">
                            {blogData.slice(0, 1).map((blog) => (
                                <div key={blog.id} className=" border-0">
                                    <img src={blog.img} alt="" className='allblogImg'/>
                                    <a href={blog.btnLink} className="btn fw-bold fontfamilySecondary all_blogbtn py-3 text-white">{blog.btnText}</a>
                                    <div className="card_body_text1 mt-4 px-3">
                                        <h2 className="m-0 maincolor fw-bold fontfamilySecondary blogtitle ">{blog.title}</h2>
                                        <p className="m-0 maincolor fontfamilySecondary blogdis">{blog.description}</p>
                                        <small>{blog.date}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-sm-6">
                            {blogData.slice(1).map((blog) => (
                                <div key={blog.id} className={`card_body_text1 px-2 mt-4`}>
                                    <h5 className="maincolor  fontfamilySecondary  fontsecondry fw-bold">{blog.title}</h5>
                                    <p className="m-0 fontfamilySecondary fontweight fontsecondry datablog">
                                        {blog.description.split(',').join(',<br/>')}
                                    </p>
                                    <small className='datablog fontfamilySecondary fontweight fontsecondry'>{blog.date}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <DroneFails />
            <div className='designparentmain'>
            <DesignPartner />
            </div>
            <div className='dronfooter'>
            <Footer />
            </div>
        </>
    );
};

export default AllBlogs;
