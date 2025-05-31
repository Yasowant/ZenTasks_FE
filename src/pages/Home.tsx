import { setSidebarItems, SidebarItem } from '@/store/slice/sidebarSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@/store/Store';
import noQuotesFound from '../assets/images/noQuotesFound.png';
import { useAuth } from '@/contexts/AuthContext';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState<Post | null>(null);
  const [selectedIds, setSelectedId] = useState<number | null>(null);

  const { user } = useAuth();
  console.log(user);

  const selectedId = useSelector(
    (state: RootState) => state.groups.selectedGroupId
  );

  useEffect(() => {
    if (selectedId) {
      setSelectedId(Number(selectedId));
    }
  }, [selectedId]);

  const getData = async () => {
    try {
      const res = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const sidebarItems: SidebarItem[] = res.data.map((post) => ({
        id: post.id.toString(),
        label: post.title,
        path: `/posts/${post.id}`,
      }));

      dispatch(setSidebarItems(sidebarItems));
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  // Fetch selected post by ID
  const getSelectedData = async () => {
    if (!selectedIds) return;

    try {
      const res = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${selectedIds}`
      );

      setSelectedData(res.data);
    } catch (error) {
      console.error('Error fetching selected post', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getSelectedData();
  }, [selectedIds]);

  return (
    <div className="h-[100%]">
      {selectedData ? (
        <div>
          <h4>{selectedData.title}</h4>
          <p>{selectedData.body}</p>
        </div>
      ) : (
        <div className="flex h-[95%] flex-col justify-center items-center ">
          <img src={noQuotesFound} alt="" className="h-[200px]" />
          <span>No Projects Found!</span>
        </div>
      )}
    </div>
  );
};

export default Home;
