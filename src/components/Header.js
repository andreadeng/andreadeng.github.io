import styled from 'styled-components';

import fontFamily from '../atoms/fontFamily';
import fontSize from '../atoms/fontSize';
import fontWeight from '../atoms/fontWeight';
import lineHeight from '../atoms/lineHeight';
import spacing from '../atoms/spacing';
import textColor from '../atoms/textColor';


const Header = styled.h1`
  font-family: ${fontFamily.header};
  font-weight: ${fontWeight.bold};
  color: ${props => props.branded ? `${textColor.brand}` : `${textColor.primary}`};
  line-height: ${lineHeight.default};
  margin-top: ${props => 
    (props.link && `${spacing.xs}`)
      || ('${spacing.none}')
  };

  margin-bottom: ${props => 
    (props.small && `${spacing.xs}`)
      || (props.xsmall && `${spacing.xs}`)
      || (props.medium && `${spacing.s}`)
      || (props.large && `${spacing.none}`)
      || (props.xlarge && `${spacing.none}`)
      || (props.link && `${spacing.xxs}`)
      || ('${spacing.none}')
  };

  font-size: ${props => 
    (props.small && `${fontSize.s}`)
      || (props.xsmall && `${fontSize.s2}`)
      || (props.medium && `${fontSize.m}`)
      || (props.large && `${fontSize.l}`)
      || (props.xlarge && `${fontSize.xl}`)
      || (props.link && `${fontSize.ss}`)
      || ('${fontSize.m}')
  };
`;

export default Header;