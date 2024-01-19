
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
  Separator,
} from '@my/ui';
import { ChevronLeft, ChevronRight, LogOut } from '@tamagui/lucide-icons';
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
  const link = useLink({
    href: '/',
  });

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
    <H2 ta="center" mt={50} mb={50}>📊 Dashboard</H2>

    <Theme name="pink">
          <Card padding="$4" mb={20}>
        <Paragraph ta="center">
        🍃 Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        </Card>
        </Theme>
    
    <YStack f={1} jc="center" ai="center" space={10}>
      
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
      <YStack mt={20}>
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
            disabled={currentPosts.length < postsPerPage}
            onPress={() => paginate(currentPage + 1)}
          >
            Next
          </Button>
        </XStack>
      </YStack>
      <Separator />
      <Theme name="red">
      <Button mb={10} {...link} icon={LogOut}>
        Log out
      </Button>
      </Theme>
    </YStack>
    </>
  );
}
