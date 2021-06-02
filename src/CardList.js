import React from 'react';
import Card from './Card';

const CardList = ({members}) =>{

  return (
       <div>
        {
         members.map((user,i)=>{
			return (
				<Card 
				key={members[i].i} 
				id={members[i].id} 
				name={members[i].name} 
				email={members[i].email} />);
  		})
 		}
    </div>
  );
} 

export default CardList;