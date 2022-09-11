
const Patient = () => {
  return (
    <div className="m-1 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: <span className="font-normal normal-case">Sergio</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date:{" "}
        <span className="font-normal normal-case">10 de enero de 2020</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          The cat does not slepp. 
        </span>
      </p>
    </div>
  );
}

export default Patient