'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data/data.json';

interface PersonData {
  id: number;
  likedUsers: number[];
  dislikedUsers: number[];
  superLikedUsers: number[];
  image: number[];
  // Add other properties as needed
}

const Home: React.FC = () => {
  const [people, setPeople] = useState<PersonData[]>(data);
  const [likedUsers, setLikedUsers] = useState<number[]>([]);
  const [superLikedUsers, setSuperLikedUsers] = useState<number[]>([]);
  const [dislikedUsers, setDislikedUsers] = useState<number[]>([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource: PersonData[], userId: number) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId: number, action: string) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(userId);
          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;

      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(userId);
          setDislikedUsers(newDislikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;

      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(userId);
          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;

      default:
        return people;
    }
  };

  return (
    <main>
      <h1>Dating App</h1>
      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          
        />
      ) : (
        <Lonely activeUserImage={people[activeUser].image} likedUsers={likedUsers} superLikedUsers={superLikedUsers} />
      )}
     
    </main>
  );
};

export default Home;