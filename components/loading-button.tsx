import React from 'react'
import { Button } from './ui/button'
import { Loader, Loader2 } from 'lucide-react';

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading: boolean;
}

const LoadingButton = ({loading, disabled, children, ...props}: LoadingButtonProps) => {
    return (
        <Button disabled={loading || disabled} {...props}>
            {loading ? <Loader2 className="animate-spin" /> : children}
        </Button>
    )
}

export default LoadingButton