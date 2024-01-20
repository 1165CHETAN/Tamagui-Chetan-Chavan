
import React, { useState, useEffect } from 'react';
import {
  Button,
  Paragraph,
  Theme,
  View,
  YStack,
  XStack,
  Card,
  H2,
  XGroup,
  Separator,
  Anchor,
} from '@my/ui';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Instagram, Linkedin, LogOut, Twitter, User } from '@tamagui/lucide-icons';
import { useLink } from 'solito/link';

interface Post {
  id: number;
  title: string;
  commentsCount: number; // Assuming a property like this exists
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}



export function UserDetailScreen() {
  const useLink = ({ href }) => {
    const handleClick = () => {
      window.location.href = href;
    };
  
    return { onClick: handleClick };
  };
  
  const link = useLink({
    href: '/',
  });
  const linkedin = useLink({
    href:'https://www.linkedin.com/in/1165chetan',
  })
  const instagram = useLink({
    href:'https://portfolio-chetan-chavan.vercel.app',
  })
  const twitter = useLink({
    href:'https://github.com/1165CHETAN',
  })


  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Fetch comments from the API
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPosts();
    fetchComments();
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
    
      <Card padding="$5" mb={50}>
        
        <XGroup justifyContent="center" gap="$4">
        <H2 mr={90}>📶 Dashboard</H2>
        <Theme name="blue"><Button circular {...linkedin} theme="active" icon={Linkedin}></Button></Theme>
          <Theme name="pink"><Button circular {...instagram} theme="active" icon={ExternalLink}></Button></Theme>
          <Theme name="dark"><Button circular {...twitter} theme="active" icon={Github}></Button></Theme>
          <Theme name="red"><Button {...link} theme="active" icon={LogOut}>Log out</Button></Theme>
        </XGroup>
        
      </Card>
    
    

   
    
    <YStack f={1} space={10}>
      
      {/* Display all current posts with comments in a single card */}
      {/* Display each post in its own card with comments */}
      {currentPosts.map((post) => (
          <Theme name="blue">
          <Card key={post.id} padding="$2">
            <Paragraph>🪧Post : {post.title}</Paragraph>
            <Separator />
            <Paragraph>⬇️Comments on Post: </Paragraph>
            {/* Display comments for the current post */}
            {comments
              .filter((comment) => comment.postId === post.id)
              .map((comment) => (
                <View key={comment.id} ml="$9">
                  <Paragraph>- {comment.body}</Paragraph>
                </View>
              ))}
          </Card>
          </Theme>
      ))}
  <Separator />

  
      {/* Pagination with horizontal page numbers */}
      <YStack mt={20} mb={20} jc="center" ai="center" >
        <XStack space={2} ai="center">
          <Button
            icon={ChevronLeft}
            disabled={currentPage === 1}
            onPress={() => paginate(currentPage - 1)}
          >
            Previous
          </Button>

          {/* Generate page number buttons */}
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <Button
              key={index + 1}
              size="$4" // Adjust size as needed
              onPress={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            icon={ChevronRight}
            disabled={currentPage === 10}
            onPress={() => paginate(currentPage + 1)}
          >
            Next
          </Button>
        </XStack>
      </YStack>
      <Separator />
      <Paragraph ta="center" mb={20}>
          Made with ❤️ by{' '}
          <Anchor color="$color12" href="https://github.com/1165CHETAN" target="_blank">
            Chetan Chavan
          </Anchor>
        </Paragraph>
    </YStack>
    </>
  );
}
