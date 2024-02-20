import { BookmarkOutlined, BookOutlined, ExploreOutlined, GamesOutlined, GroupOutlined,SubscriptionsOutlined, StreamOutlined,PlaylistPlayOutlined, TrendingUp, LiveTvOutlined, CarRental, FireTruck, Sports, Speed } from "@mui/icons-material";
import './DealsSidebar.scss';
import Profile from '../../assets/icon.png';
import { useState } from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
            <section>
                <div className="links-container">
                    <div className="link active" title="explore">
                        <ExploreOutlined />
                        <span>Explore</span>
                    </div>
                    <div className="link" title="trending">
                        <TrendingUp />
                        <span>Trending</span>
                    </div>
                    <div className="link" title="latest">
                        <StreamOutlined />
                        <span>Latest</span>
                    </div>
                    <div className="link" title="designer">
                        <PlaylistPlayOutlined />
                        <span>Designer</span>
                    </div>
                    <div className="link" title="saved">
                        <BookmarkOutlined />
                        <span>Bookmarks</span>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="links-container">
                    <div className="link">
                    </div>
                    <div className="link" title="super cars">
                        <Speed />
                        <span>Super car</span>
                    </div>
                    <div className="link" title="sports cars">
                        <Sports />
                        <span>Sports car</span>
                    </div>
                    <div className="link" title="trucks">
                        <FireTruck />
                        <span>Trucks</span>
                    </div>
                    <div className="link" title="crossover">
                        <CarRental />
                        <span>Crossover</span>
                    </div>
                </div>
            </section>
            <hr />
            <div className="profile link" title="my dashboard">
                <img className='profile-img' src={Profile}/>
                <div className='profile-name'>
                <h4>Albert Einstein</h4>
                <p>visit profile &raquo;</p>
            </div>
        </div>
    </div>
  );
}