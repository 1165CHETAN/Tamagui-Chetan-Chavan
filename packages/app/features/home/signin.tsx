import {
    Anchor,
    Button,
    H3,
    Input,
    Sheet,
    Text,
    Theme,
    useToastController,
    View,
    XGroup,
  } from '@my/ui';
  import { ChevronDown, ChevronRight } from '@tamagui/lucide-icons';
  import { useState } from 'react';
  import { useLink } from 'solito/link';
  
  
   

    
export function SignIn() {
    const [open, setOpen] = useState(false);
    const toast = useToastController();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const linkProps = useLink({
      href: '/user/nate',
    });
    
   
    const handleSignIn = () => {
      // sample username and password
      const correctEmail = 'chetan@example.com';
      const correctPassword = 'password123';
  
      if (email === correctEmail && password === correctPassword) {
        setOpen(false);
        toast.show('Sign In Successful!', {
          message: 'Redirecting to Dashboard...',
        });
        // Redirect to /user/nate
        window.location.href = linkProps.href;
      } else {
        // Display an error message for incorrect credentials
        toast.show('Authentication Failed!', {
          message: 'Please enter correct email and password.',
        });
      }
    };
  
    return (
      <>
        <Theme name="pink">
          <XGroup justifyContent="center" mt={15}>
          <Theme name="blue">
          <Button
            icon={ChevronDown}
            theme="active"
            size="$5"
            onPress={() => setOpen((x) => !x)}
            mb="$10"
          >
            <Text>Sign In</Text>
          </Button>
          </Theme>
          </XGroup>
       
  
        <Theme name="blue">
          <Sheet
            modal
            animation="medium"
            open={open}
            onOpenChange={setOpen}
            snapPoints={[80]}
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
                  
                }}
                mb="$3"
              />
            </View>
            <Sheet.Frame ai="center" jc="center" p="$3">
              <Sheet.Handle />
              <H3 ta="center" mb="$7">
                🙋 Hey, Please enter your credentials...
              </H3>
  
              <Input
                placeholder="Username..."
                value={email}
                onChangeText={(text) => setEmail(text)}
                mb="$3"
              />
              <Input
                placeholder="Password..."
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                mb="$3"
              />
              <Button
               
                icon={ChevronRight}
                onPress={handleSignIn}
                
              >
                Submit
              </Button>
            </Sheet.Frame>
          </Sheet>
        </Theme>
        </Theme>      
        </>
    )
  }
  