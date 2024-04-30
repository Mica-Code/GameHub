import { HStack, List, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react'

export const GenreSkeleton = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
		<List>
			{skeletons.map((skeleton) => (
				<ListItem key={skeleton} paddingY={2}>
					<HStack>
						<Skeleton boxSize="35px" />
						<SkeletonText skeletonHeight="2" />
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
