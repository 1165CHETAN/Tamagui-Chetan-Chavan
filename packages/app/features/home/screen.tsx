import {
  Anchor,
  Button,
  H1,
  H3,
  Input,
  Paragraph,
  Separator,
  Sheet,
  Text,
  Theme,
  useToastController,
  View,
  XStack,
  YStack,
  Card,
  XGroup,
} from '@my/ui';
import { ChevronDown, ChevronRight, Instagram, Linkedin, LogOut, Twitter } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { useLink } from 'solito/link';
import { SignIn } from './signin';
import { H2 } from '@my/ui';

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  });
  const linkedin = useLink({
    href:'https://www.linkedin.com/company/itwoxinc',
  })
  const instagram = useLink({
    href:'https://www.instagram.com/itwoxinc',
  })
  const twitter = useLink({
    href:'  https://twitter.com/itwoxinc',
  })


  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Theme name="blue">
      <Card padding="$8">
      <YStack space="$4">
        <H1 ta="center">👋Welcome to IT-wox!!</H1>
        <Separator />
        <Theme name="blue">
          <Card padding="$4">
            <Paragraph ta="center">
            🍃 "Join the eco-friendly revolution! Say goodbye to paper and embrace the digital age with our chat application. Connect effortlessly, share ideas seamlessly, and help us save trees one message at a time. Let's chat for a greener tomorrow!" 🍃🍀🌿🌱♻️🌍
            </Paragraph>
            </Card>
            <Separator />
          
        </Theme>
        <XGroup justifyContent="center" gap="$4">
       
        <Theme name="blue"><Button  {...linkedin} circular theme="active" icon={Linkedin}></Button></Theme>
          <Theme name="pink"><Button {...instagram} circular theme="active" icon={Instagram}></Button></Theme>
          <Theme name="dark"><Button {...twitter} circular theme="active" icon={Twitter}></Button></Theme>
         
        </XGroup>
        
      
      </YStack>
      </Card>
      </Theme>
      <SignIn />
      
      <Paragraph ta="center" mt={50}>
          Made with ❤️ by{' '}
          <Anchor color="$color12" href="https://github.com/1165CHETAN" target="_blank">
            Chetan Chavan
          </Anchor>
        </Paragraph>
        
        
    </YStack>
    
  );
}

