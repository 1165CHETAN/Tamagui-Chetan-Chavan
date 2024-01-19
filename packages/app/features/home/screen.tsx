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
} from '@my/ui'
import { ChevronDown, ChevronRight, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" bc="$background">
        <H1 ta="center">👋Welcome to IT-wox!!</H1>
        <Theme name="blue">
          <Card padding="$4">
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        </Card>
        </Theme>
        <Separator />
        <Paragraph ta="center">
        Made with ❤️ by{' '}
          <Anchor color="$color12" href="https://github.com/1165CHETAN" target="_blank">
            Chetan Chavan
          </Anchor>
          
            
          
        </Paragraph>
      </YStack>

     

      <SheetDemo />

      
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const linkProps = useLink({
    href: '/user/nate',
  });

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
              Submit
            </Button>
          </Sheet.Frame>
        </Sheet>
        </Theme>
      </>
  )
}
