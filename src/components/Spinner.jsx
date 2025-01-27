import ClipLoader from 'react-spinners/ClipLoader';

const override = {
   display: 'block',
   margin: '100px auto'
}

// eslint-disable-next-line react/prop-types
const Spinner = ({ isLoading }) => {
  return (
    <ClipLoader
      color='#4558ca'
      loading={isLoading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner