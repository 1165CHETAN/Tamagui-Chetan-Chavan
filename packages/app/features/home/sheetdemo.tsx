import {
    Anchor,
    Button,
    H1,
    Input,
    Paragraph,
    Separator,
    Sheet,
    Text,
    useToastController,
    XStack,
    YStack,
    View,
    Theme,
    XGroup
  } from '@my/ui'
  import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Instagram, Linkedin, Twitter } from '@tamagui/lucide-icons'
  import { useState } from 'react'
  import { useLink } from 'solito/link'
  import { Avatar, H3, Card } from 'tamagui'
  import { z, ZodError } from 'zod';

  
  
  export function SheetDemo() {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0);
    const toast = useToastController();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const linkProps = useLink({
      href: '/user/nate',
    });
    
  
    // Function to check if both email and password are entered
    const isSignInDisabled = () => {
      return !email || !password;
    };
  
    return (
      <> 
        <Theme name="blue">
        <Button
          
          theme="active"
          size="$5"
          onPress={() => setOpen((x) => !x)}
          mb="$10" // Add margin bottom to create space between the button and the Sheet
        >
          <Text >Sign In</Text>
        </Button>
        </Theme>
        <Theme name="pink">
        
</Theme>
        <Theme name="light_blue">
        <Sheet
          modal
          animation="medium"
          open={open}
          onOpenChange={setOpen}
          snapPoints={[80]}
          position={position}
          onPositionChange={setPosition}
          dismissOnSnapToBottom
        >
          
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <View ai="center" jc="center">
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              });
            }}
            mb="$3" // Add margin bottom to create space between the button and the Sheet.Frame content
          />
          </View>
          <Sheet.Frame ai="center" jc="center" p="$3">
            <Sheet.Handle />
            <H3 ta="center" mb="$7">🙋 Hey, Please enter you credentials...</H3>
           
  
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              mb="$3" // Add margin bottom to create space between the input and the next element
            />
            <Input 
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              mb="$3" // Add margin bottom to create space between the input and the next element
            />
            <Button {...linkProps} icon={ChevronRight} onPress={() => {
                setOpen(false);
                toast.show('Sheet closed!', {
                  message: 'Just showing how toast works...',
                });
              }} disabled={isSignInDisabled()}>
              Sign In
            </Button>
          </Sheet.Frame>
        </Sheet>
        </Theme>
      </>
    );
  }